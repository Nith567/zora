"use client";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function Connect() {
  const { address } = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="flex flex-col items-center justify-center">
      {address ? (
        <div className="flex flex-col items-center md:items-end">
          <button
            className="bg-white text-[--blue] rounded-full px-3 py-1.5 text-sm md:text-base hover:bg-[--blue] hover:text-white transition duration-300 ease-in-out"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        </div>
      ) : (
        connectors.map((connector) => (
          <button
            key={connector.id}
            className="bg-white text-[--blue] rounded-full px-3 py-1.5 text-sm md:text-base hover:bg-[--blue] hover:text-white transition duration-300 ease-in-out"
            onClick={() => connect({ connector })}
          >
            Connect
          </button>
        ))
      )}
      {error && <div className="text-red-500 mt-2">{error.message}</div>}
    </div>
  );
}

export default Connect;
