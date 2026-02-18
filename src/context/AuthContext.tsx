import { supabase } from "@/lib/supabase/client";
import { createContext, ReactNode, useContext, useState } from "react";

export interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    profileImage?: string;
    onboardingCompleted?: boolean;
}

interface AuthContextType {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    updateUser: (userData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const fetchUserProfile = async (userId: string): Promise<User | null> => {
        try {
            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", userId)
                .single();

            if (error) {
                console.error("Error fetching user profile:", error);
                return null;
            }

            return {
                id: data.id,
                name: data.name,
                email: "", // auth'tan alacağız
                username: data.username,
                profileImage: data.profile_image_url,
                onboardingCompleted: data.onboarding_completed,
            };

        } catch (error) {
            console.error("Error fetching user profile:", error);
            return null;
        }
    };



    const signIn = async (email: string, password: string) => {
        // Implement sign-in logic using Supabase client
        // On successful sign-in, set the user state
    };

    const signUp = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });
        if (error) { throw error; }

        const { data: sessionData } = await supabase.auth.getSession();

        if (!sessionData.session) {
            console.log("No active session yet.");
            return;
        }

        if (data.user) {
            console.log("User signed up:", data.user);
            const userProfile = await fetchUserProfile(data.user.id);
            setUser(userProfile);
        }
    };

    const updateUser = async (userData: Partial<User>) => {
        if (!user) return;

        try {
            const updateData: any = {};
            if (userData.name) updateData.name = userData.name;
            if (userData.username) updateData.username = userData.username;
            if (userData.profileImage) updateData.profile_image_url = userData.profileImage;
            if (userData.onboardingCompleted !== undefined) updateData.onboarding_completed = userData.onboardingCompleted;

            const { error } = await supabase.from("profiles").update(updateData).eq("id", user.id);

            if (error) {
                throw error;
            }

        } catch (error) {
            console.error("Error updating user:", error);
            throw error;
        }
    };

    const signOut = async () => {
        // Implement sign-out logic using Supabase client
        // On successful sign-out, set the user state to null
    };

    return <AuthContext.Provider value={{ user, signIn, signUp, signOut, updateUser }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}