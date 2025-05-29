import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            {" "}
            <p className="text-xl text-mutwed-foreground">
                
                &copy; {new Date().getFullYear()} VIKRANT KAWADKAR. All rights reserved.
            </p>
            <a 
                href="#hero" 
                className="flex items-center gap-2 p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                >
                    Back to top
                <ArrowUp className="w-6 h-6" />
            </a>
        </footer>
    );
}