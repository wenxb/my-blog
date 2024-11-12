interface Site {
    title: string;
    description: string;
    keywords: string;
    themeMode: string;
    url: string;
    icp: string;
}

interface Author {
    name: string;
    avatar: string;
}

interface PageHome {
    title: string;
    desc: any
}

interface Page {
    home: PageHome
}

export interface Config {
    author: Author;
    site: Site;
    page: Page
}
