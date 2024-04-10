import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Ilan Outhier',
  subtitle: 'Portfolio',
  lang: 'fr',
  themeHue: 250,
  banner: {
    enable: true,
    src: 'assets/images/beautiful-sky.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/Ilanou',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar-bird.png',
  name: 'Ilan Outhier',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  links: [
    {
      name: 'Linkedin',
      icon: 'fa6-brands:linkedin',
      url: 'https://www.linkedin.com/in/ilan-outhier/',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/IlanOu',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
