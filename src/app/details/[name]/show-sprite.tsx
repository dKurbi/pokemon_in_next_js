import { ShowSpriteProps } from "@/lib/definitions";

export function ShowSprite({ url, alt }: ShowSpriteProps) {
if (!url)
	return <div>No shiny sprite available</div>
return <img src={url} alt={alt} className="w-48 h-48" />;
}
