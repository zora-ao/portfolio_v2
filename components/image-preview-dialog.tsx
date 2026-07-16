"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ImagePreviewDialogProps {
  image: string | null;
  onClose: () => void;
}

export default function ImagePreviewDialog({
  image,
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
          <Image
            src={image}
            alt="Preview"
            width={1600}
            height={900}
            className="w-full rounded-xl object-contain"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}