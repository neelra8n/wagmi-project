type MenuItem = {
    id: string;
    label: string;
    icon?: string;
    highlight?: boolean;
    status?: string;
};

type MenuCategory = {
    id: string;
    label: string;
    items: MenuItem[];
};

type SocialMediaItem = {
    id: string;
    platform: string;
    icon: string;
};

type MenuStructure = {
    menu: MenuCategory[];
    social_media: SocialMediaItem[];
};