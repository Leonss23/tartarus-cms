"use client";

import { useParams, useRouter } from "next/navigation";
import { ComponentPropsWithoutRef, useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Store } from "@/db/drizzle/schema";
import { useStoreModal } from "@/hooks/use-store-modal";

type Props = ComponentPropsWithoutRef<typeof PopoverTrigger> & {
  stores: Store[];
};

export function StoreSelector({ stores = [], className }: Props) {
  const storeModal = useStoreModal();
  const selectedId = Number(useParams().storeId);
  const router = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          // aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {stores.find((store) => store.id === selectedId)?.name}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search store..." />
          <CommandEmpty>No stores found.</CommandEmpty>
          <CommandGroup>
            {stores.map((store) => (
              <CommandItem
                key={store.id}
                onSelect={() => {
                  console.log({ store });
                  setOpen(false);
                  router.push(`/${store.id}`);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedId === store.id ? "opacity-100" : "opacity-0"
                  )}
                />
                {store.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
