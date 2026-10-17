"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ImagePreviewDialogProps {
  image: string | null;
  title?: string;
  category?: string;
  onClose: () => void;
}

export default function ImagePreviewDialog({
  image,
  title,
  category,
  onClose,
}: ImagePreviewDialogProps) {
  return (
    <Dialog
      open={!!image}
      onOpenChange={onClose}
    >
      <DialogContent
        className="
          max-w-6xl
          border-none
          bg-transparent
          shadow-none
          p-0
        "
      >
        {image && (
          <div className="flex flex-col items-center gap-4">
            <Image
              src={image}
              alt={title ? `${title} screenshot` : "Preview"}
              width={1600}
              height={900}
              className="w-full rounded-2xl object-contain"
            />

            {/* Caption */}
            {(title || category) && (
              <div className="flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2">
                {title && (
                  <span className="text-sm font-semibold text-foreground">
                    {title}
                  </span>
                )}

                {category && (
                  <span className="text-xs text-muted-foreground">
                    {category}
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
