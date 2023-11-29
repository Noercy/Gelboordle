import { GELBOORU_URL } from "$env/static/private"

export function GET() {
    console.log("hi")
    return fetch("https://gelbooru.com/index.php?page=dapi&s=post&q=index" + GELBOORU_URL)
}