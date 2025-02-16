export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <AppIcon className="size-7" />

      <div className="-space-y-1.5 grid">
        <span className="font-bold text-base">Keyforge</span>
        <span className="text-sm text-fd-muted-foreground">Docs</span>
      </div>
    </div>
  );
}

export function AppIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width={512}
      height={512}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect
        id="b"
        width={512}
        height={512}
        x={0}
        y={0}
        rx={128}
        fill="url(#a)"
        stroke="#FFF"
        strokeWidth={0}
        strokeOpacity="100%"
        paintOrder="stroke"
      />
      <clipPath>
        <use xlinkHref="#b" />
      </clipPath>
      <defs>
        <radialGradient
          id="a"
          cx="50%"
          cy="50%"
          r="100%"
          fx="50%"
          fy="0%"
          gradientUnits="objectBoundingBox"
        >
          <stop stopColor="#4d4d4d" />
          <stop offset={1} />
        </radialGradient>
        <radialGradient
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 512 -512 0 256 0)"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
      </defs>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={352}
        height={352}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-key-round"
        x={80}
        y={80}
        alignmentBaseline="middle"
        color="#e6e6e6"
        {...props}
      >
        <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 10-4-4z" />
        <circle cx={16.5} cy={7.5} r={0.5} fill="currentColor" />
      </svg>
    </svg>
  );
}
