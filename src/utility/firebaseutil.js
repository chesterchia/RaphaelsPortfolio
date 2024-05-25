import { storage } from '../config/firebase'
import { ref, listAll, getDownloadURL } from "firebase/storage"

export async function fetchAllVideos() {
    const categories = await fetchCategories()
    const allVideos = []

    for (let category of categories) {
        const videos = await fetchVideosByCategory(category)
        allVideos.push(...videos)
    }

    return allVideos
}

export async function fetchVideosByCategory(category) {
    const categoryRef = ref(storage, category)
    const res = await listAll(categoryRef)
    const videoUrls = await Promise.all(res.items.map(getDownloadURL))
    
    return videoUrls
}

export async function fetchCategories() {
    const res = await listAll(ref(storage))
    const folders = new Set()

    res.prefixes.forEach(folderRef => {
        const name = folderRef.name
        folders.add(name)
    })  
    
    return Array.from(folders)
}

export function fetchBannerVideo() {
    const bannerRef = ref(storage, 'Banner.mp4')
    return getDownloadURL(bannerRef)
}