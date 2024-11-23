import "@/styles/index.scss"
import {ThemeProvider} from "@/lib/theme-provider";
import useConfig from "@/lib/hook/useConfig";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Toaster} from "@/components/ui/toaster";
import ReduxProvider from "@/lib/ReduxProvider";
import {SWRProvider} from "@/lib/swr-provider";
import PersistProvider from "@/lib/PersistProvider";
import {Analytics} from "@/components/module/analytics";

export function generateViewport() {
    return {
        themeColor: [
            { media: '(prefers-color-scheme: light)', color: 'white' },
            { media: '(prefers-color-scheme: dark)', color: '#1f1f1f' },
        ],
    }
}

export async function generateMetadata() {
    const config = useConfig()
    return {
        icons:{
            icon: '/icon.jpg',
            apple: '/icon.jpg',
        },
        title: {
            template: `%s - ${config.site.title}`,
            default: config.site.title,
        },
        description: config.site.description,
        keywords: config.site.keywords,
        authors: [
            {
                name: config.author.name,
                url: config.site.url,
            }
        ],
        creator: config.author.name,
        openGraph:{
            title: config.site.title,
            description: config.site.description,
            url: config.site.url,
            siteName: config.site.title,
            locale: 'zh_CN',
            type: 'website',
        }
    }
}

export default function RootLayout({children}) {
    const config = useConfig()

    return (
        <html lang="zh" suppressHydrationWarning>
        <body>
        <SWRProvider>
            <ReduxProvider>
                <PersistProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme={config.site.themeMode || 'system'}
                        enableSystem
                        disableTransitionOnChange
                    >
                        <TooltipProvider>
                            {children}
                        </TooltipProvider>
                        <Toaster/>
                    </ThemeProvider>
                </PersistProvider>
            </ReduxProvider>
        </SWRProvider>
        <Analytics/>
        </body>
        </html>
    );
}
