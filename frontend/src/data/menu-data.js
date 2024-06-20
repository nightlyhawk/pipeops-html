import bihome from '../assets/icons/bihome.svg'
import home from '../assets/icons/home.svg'
import cluster from '../assets/icons/cluster.svg'
import vault from '../assets/icons/vault.svg'
import pigeon from '../assets/icons/pigeon.svg'
import map from '../assets/icons/map.svg'
import settings from '../assets/icons/settings.svg'
import bisettings from '../assets/icons/bisettings.svg'
import tower from '../assets/icons/tower.svg'
import dome from '../assets/icons/dome.svg'

export const top_data = [
    {
        title: 'Overview',
        href: '/dashboard',
        icon: home,
        bicon: bihome
    },

    {
        title: "Settings",
        href: "/settings",
        icon: settings,
        bicon: bisettings
    }
]

export const bottom_data = [
    
    {
        title: "Pigeon Hole",
        href: "/pigeon hole",
        icon: pigeon
    },

    {
        title: "DoMe",
        href: "/dome",
        icon: dome
    },

    {
        title: "The Box",
        href: "/the box",
        icon: vault
    },

    {
        title: "Watch Tower",
        href: "/watch tower",
        icon: tower
    },

    {
        title: "Institution Map",
        href: "/institution map",
        icon: map
    },

    {
        title: "Cluster",
        href: "/cluster",
        icon: cluster
    }
]