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
import {
    Home,
    Cluster,
    Vault,
    Pigeon,
    Map,
    Setting,
    Tower,
    Dome,
    Logout
} from '../assets/icons/js-icons'

export const top_data = [
    {
        title: 'Overview',
        href: '/dashboard',
        icon: Home,
        bicon: bihome
    },

    {
        title: "Settings",
        href: "settings",
        icon: Setting,
        bicon: bisettings
    }
]

export const bottom_data = [
    
    {
        title: "Pigeon Hole",
        href: "pigeon_hole",
        icon: Pigeon
    },

    {
        title: "DoMe",
        href: "do_me",
        icon: Dome
    },

    {
        title: "The Box",
        href: "the_box",
        icon: Vault
    },

    {
        title: "Watch Tower",
        href: "watch_tower",
        icon: Tower
    },

    {
        title: "Institution Map",
        href: "institution_map",
        icon: Map
    },

    {
        title: "Cluster",
        href: "cluster",
        icon: Cluster
    }
]