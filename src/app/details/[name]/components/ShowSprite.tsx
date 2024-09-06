// src/app/details/[name]/ShowSprite.tsx

import { ShowSpriteProps } from "@/lib/definitions";

export function ShowSprite({ url, alt, type }: ShowSpriteProps) {
if (!url)
	return <div>No ${type} sprite available</div>
return <img  src={url} alt={alt +" " + type} className="w-48 h-48" />;
}
