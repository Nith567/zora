"use client";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function Connect() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
      <div>
        {connectors.map((connector) => (
          <button
            id={connector.id}
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            <svg
            width="100%"
            height="100%"
            viewBox="0 0 198 57"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M186 4.00002V7.60578e-06L12 0V4.00001H8V8.00001H4V12H0V45H4V49H8V53L12 53V57L186 57V53H190V49H194V45H198V12H194V8.00001L190 8.00001V4.00001L186 4.00002Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="text-[--blue] text-lg absolute cursor-pointer top-10 left-0 h-full w-full flex items-center justify-center">
            get based
          </p>
          </button>
        ))}
      </div>
    </>
  );
}

export default Connect;
