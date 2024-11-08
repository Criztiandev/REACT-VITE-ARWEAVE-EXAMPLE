// @ts-ignore
import { ArweaveWalletKit, useConnection } from "arweave-wallet-kit";
import { message, createDataItemSigner, result } from "@permaweb/aoconnect";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

function MainScreen() {
  const [prepMessage, setPrepMessage] = useState("");
  const { connected, connect, disconnect } = useConnection();
  const myProcess = import.meta.env.VITE_PROCESS_ID;

  /**
   * Connecting Wallet
   */
  const handleConnection = async () => {
    try {
      if (connected) {
        await disconnect();
      } else {
        await connect();
      }
    } catch (error) {
      console.error("Wallet connection error:", error);
    }
  };

  /**
   * Sending Mutation from client to server
   */
  const mutation = useMutation({
    mutationKey: ["Send"],
    mutationFn: async () => {
      const response = await message({
        process: myProcess,
        tags: [{ name: "Action", value: "Dumify" }],
        signer: createDataItemSigner((window as any).arweaveWallet),
        data: "Message test 1",
      });
      const r = await result({
        message: response,
        process: myProcess,
      });

      setPrepMessage(r.Messages[0].Data);
    },
  });

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4">
        {prepMessage && <div>{prepMessage}</div>}

        {connected && (
          <Button
            disabled={mutation.isPending}
            onClick={() => mutation.mutate()}
          >
            Message
          </Button>
        )}

        <Button onClick={handleConnection}>
          {connected ? "Disconnect Wallet" : "Connect Wallet"}
        </Button>

        <Link to="about" className={cn(buttonVariants({ variant: "outline" }))}>
          Goto about
        </Link>
      </div>
    </div>
  );
}

export default MainScreen;
