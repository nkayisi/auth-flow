"use client";

import { singOutAction } from "@/lib/actions/auth-actions";
import { Button } from "@heroui/button";

export default function SignOutButton() {
  return (
    <Button
      color="danger"
      variant="solid"
      radius="md"
      onPress={() => singOutAction()}
    >
      Sign Out
    </Button>
  );
}
