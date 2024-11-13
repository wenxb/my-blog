import "@/styles/index.scss"
import {ThemeProvider} from "@/lib/theme-provider";
import useConfig from "@/lib/hook/useConfig";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Toaster} from "@/components/ui/toaster";

export async function generateMetadata() {
    const config = useConfig()
    return {
        title: config.site.title,
        description: config.site.description,
        keywords: config.site.keywords,
        authors: [
            {
                name: config.author.name,
                url: config.site.url,
            }
        ],
        creator: config.author.name
    }
}

export default function RootLayout({children}) {
    return (
        <html lang="zh" suppressHydrationWarning>
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <TooltipProvider>
                {children}
            </TooltipProvider>
            <Toaster />
        </ThemeProvider>
        </body>
        </html>
    );
}
