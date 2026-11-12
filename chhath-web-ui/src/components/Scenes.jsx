export function DiyoMark({ className = '', size = 26 }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      height={size}
      viewBox="0 0 32 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.9 19.3c1.9 4.5 5.9 7 11.1 7s9.2-2.5 11.1-7c-3.7 1.4-7.4 2.1-11.1 2.1s-7.4-.7-11.1-2.1Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M16 15.8c-2.9-2.6-3-5.8-.3-9.1 2.7 3.3 3 6.5.3 9.1Z" fill="currentColor" />
      <path
        d="M10.4 23.4h11.2"
        opacity=".55"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.3"
      />
    </svg>
  )
}

export function MarigoldDivider({ className = '' }) {
  return (
    <div aria-hidden="true" className={`garland-divider ${className}`}>
      <svg fill="none" viewBox="0 0 120 24" xmlns="http://www.w3.org/2000/svg">
        {[0, 1, 2, 3, 4].map((flower) => (
          <g key={flower} transform={`translate(${12 + flower * 24} 12)`}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((petal) => (
              <ellipse
                key={petal}
                cx="0"
                cy="-5"
                fill={petal % 2 === 0 ? '#f2b84a' : '#de9c23'}
                opacity=".9"
                rx="2.6"
                ry="4.6"
                transform={`rotate(${petal * 45})`}
              />
            ))}
            <circle fill="#9f3f22" r="3" />
          </g>
        ))}
      </svg>
    </div>
  )
}

export function HeroScene({ className = '' }) {
  return (
    <svg
      aria-labelledby="hero-art-title"
      className={className}
      preserveAspectRatio="xMidYMax slice"
      role="img"
      viewBox="0 0 1440 900"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="hero-art-title">
        An illustrated riverbank at sunrise, with the sun reflected in the water, devotees offering
        prayers, and small oil lamps floating nearby.
      </title>
      <defs>
        <radialGradient id="heroSunGlow">
          <stop offset="0" stopColor="#fff3cb" stopOpacity=".92" />
          <stop offset=".42" stopColor="#f9cd7f" stopOpacity=".44" />
          <stop offset="1" stopColor="#f9cd7f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="heroSunCore" cx="50%" cy="44%" r="56%">
          <stop offset="0" stopColor="#fff9e6" />
          <stop offset=".56" stopColor="#f8d287" />
          <stop offset="1" stopColor="#e9974b" />
        </radialGradient>
        <linearGradient id="heroWater" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#b9714a" />
          <stop offset=".26" stopColor="#6b4140" />
          <stop offset=".68" stopColor="#2a2031" />
          <stop offset="1" stopColor="#0d111c" />
        </linearGradient>
        <linearGradient id="heroHills" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#3a2735" />
          <stop offset="1" stopColor="#211a2a" />
        </linearGradient>
        <linearGradient id="heroGhat" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#151321" />
          <stop offset="1" stopColor="#080b13" />
        </linearGradient>
        <linearGradient id="heroReflect" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#f9d58b" stopOpacity=".5" />
          <stop offset="1" stopColor="#f9d58b" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroFlame" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fff4c7" />
          <stop offset="1" stopColor="#f0a94c" />
        </linearGradient>
        <g id="heroDiyo">
          <ellipse cx="0" cy="6" fill="#f6c36b" opacity=".18" rx="20" ry="5" />
          <path d="M-15 0C-10 9 10 9 15 0C9 6-9 6-15 0Z" fill="#e9a34d" />
          <path d="M-12 0C-6-3 6-3 12 0Z" fill="#b76a33" />
          <path d="M0-15C-6-9-4-3 0 0C4-3 6-9 0-15Z" fill="url(#heroFlame)" />
        </g>
      </defs>

      <g fill="#f6e6c8" opacity=".55">
        <circle cx="610" cy="140" r="1.3" />
        <circle cx="700" cy="96" r="1" />
        <circle cx="790" cy="170" r="1.4" />
        <circle cx="900" cy="110" r="1" />
        <circle cx="960" cy="210" r="1.1" />
        <circle cx="540" cy="230" r="1" />
        <circle cx="1010" cy="150" r="1.2" />
      </g>

      <g className="hero-scene-sun">
        <circle cx="840" cy="505" fill="url(#heroSunGlow)" r="250" />
        <circle cx="840" cy="505" fill="url(#heroSunCore)" r="78" />
        <circle
          cx="840"
          cy="505"
          fill="none"
          r="78"
          stroke="#fff3cf"
          strokeOpacity=".35"
        />
      </g>

      <g
        className="hero-birds"
        fill="none"
        opacity=".5"
        stroke="#241a28"
        strokeLinecap="round"
        strokeWidth="2.4"
      >
        <path d="M650 310c8-8 16-8 24 0 8-8 16-8 24 0" />
        <path d="M720 270c6-6 12-6 18 0 6-6 12-6 18 0" />
        <path d="M930 330c5-5 10-5 15 0 5-5 10-5 15 0" />
      </g>

      <path
        d="M0 642C120 610 210 632 300 612C390 592 460 620 560 604C660 588 730 610 840 600C950 590 1030 618 1120 604C1210 590 1330 620 1440 598V700H0Z"
        fill="url(#heroHills)"
      />

      <rect fill="url(#heroWater)" height="260" width="1440" y="640" />

      <path d="M778 640H902L952 900H728Z" fill="url(#heroReflect)" opacity=".72" />

      <g className="hero-shimmer" fill="#f8d38a">
        <rect height="4" opacity=".58" rx="2" width="156" x="762" y="664" />
        <rect height="3" opacity=".44" rx="1.5" width="100" x="790" y="690" />
        <rect height="4" opacity=".38" rx="2" width="192" x="744" y="722" />
        <rect height="3" opacity=".32" rx="1.5" width="120" x="790" y="760" />
        <rect height="4" opacity=".25" rx="2" width="230" x="720" y="806" />
        <rect height="3" opacity=".2" rx="1.5" width="140" x="780" y="862" />
      </g>

      <g fill="url(#heroGhat)">
        <path d="M0 690H210V716H270V742H330V772H390V900H0Z" />
        <path d="M1440 674H1230V702H1170V730H1110V762H1050V900H1440Z" />
      </g>
      <g opacity=".32" stroke="#4a3430" strokeWidth="1.5">
        <path d="M0 720H230" />
        <path d="M0 752H290" />
        <path d="M0 784H350" />
        <path d="M1440 710H1210" />
        <path d="M1440 742H1150" />
        <path d="M1440 776H1090" />
      </g>

      <g className="hero-devotee" opacity=".72" transform="translate(688 654) scale(.62)">
        <ellipse cx="0" cy="2" fill="#060910" opacity=".55" rx="46" ry="9" />
        <path d="M-30-6H30L26 120H-26Z" fill="#090c15" />
        <circle cx="0" cy="-34" fill="#090c15" r="17" />
        <path
          d="M-29 0C-50 14-56 36-48 54"
          fill="none"
          stroke="#090c15"
          strokeLinecap="round"
          strokeWidth="11"
        />
        <path
          d="M29 0C50 14 56 36 48 54"
          fill="none"
          stroke="#090c15"
          strokeLinecap="round"
          strokeWidth="11"
        />
      </g>

      <g className="hero-devotee" transform="translate(762 640)">
        <ellipse cx="0" cy="2" fill="#060910" opacity=".55" rx="46" ry="9" />
        <path d="M-30-6H30L26 120H-26Z" fill="#090c15" />
        <circle cx="0" cy="-34" fill="#090c15" r="17" />
        <path
          d="M-29 0C-50 14-56 36-48 54"
          fill="none"
          stroke="#090c15"
          strokeLinecap="round"
          strokeWidth="11"
        />
        <path
          d="M29 0C50 14 56 36 48 54"
          fill="none"
          stroke="#090c15"
          strokeLinecap="round"
          strokeWidth="11"
        />
        <ellipse cx="0" cy="44" fill="#f0b04e" opacity=".8" rx="32" ry="7" />
        <path d="M-14 38C-6 32 6 32 14 38" fill="none" opacity=".65" stroke="#f8dba0" strokeWidth="2" />
      </g>

      <g className="hero-devotee" opacity=".9" transform="translate(892 666) scale(.86)">
        <ellipse cx="0" cy="2" fill="#060910" opacity=".55" rx="46" ry="9" />
        <path d="M-30-6H30L26 120H-26Z" fill="#090c15" />
        <circle cx="0" cy="-34" fill="#090c15" r="17" />
        <path
          d="M-29 0C-50 14-56 36-48 54"
          fill="none"
          stroke="#090c15"
          strokeLinecap="round"
          strokeWidth="11"
        />
        <path
          d="M29 0C50 14 56 36 48 54"
          fill="none"
          stroke="#090c15"
          strokeLinecap="round"
          strokeWidth="11"
        />
        <ellipse cx="0" cy="44" fill="#f0b04e" opacity=".7" rx="32" ry="7" />
      </g>

      <g className="hero-diyo">
        <use href="#heroDiyo" transform="translate(618 706) scale(.9)" />
      </g>
      <g className="hero-diyo">
        <use href="#heroDiyo" transform="translate(700 780) scale(1.05)" />
      </g>
      <g className="hero-diyo">
        <use href="#heroDiyo" transform="translate(932 748) scale(.85)" />
      </g>
      <g className="hero-diyo">
        <use href="#heroDiyo" transform="translate(558 824) scale(.7)" />
      </g>
      <g className="hero-diyo">
        <use href="#heroDiyo" transform="translate(862 850) scale(.75)" />
      </g>

      <g fill="none" opacity=".9" stroke="#080b13" strokeLinecap="round" strokeWidth="4">
        <path d="M40 900C36 842 42 800 26 756" />
        <path d="M64 900C60 852 72 812 58 774" />
        <path d="M94 900C92 858 104 824 94 790" />
        <path d="M1396 900C1392 846 1400 806 1384 764" />
        <path d="M1420 900C1418 856 1428 824 1418 792" />
      </g>

      <path d="M0 900V846H96V866H158V888H218V900Z" fill="#080b13" />
    </svg>
  )
}

export function ChhathScene({ className = '' }) {
  return (
    <svg
      aria-labelledby="chhath-art-title"
      className={className}
      role="img"
      viewBox="0 0 900 700"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="chhath-art-title">
        An illustration of Chhath at sunrise: devotees standing in a teal river, offering prayers to
        the rising sun, with diyas floating on the water.
      </title>
      <defs>
        <linearGradient id="chhathSky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fdf4e0" />
          <stop offset=".58" stopColor="#f9d9a8" />
          <stop offset="1" stopColor="#f2b878" />
        </linearGradient>
        <radialGradient id="chhathSunGlow">
          <stop offset="0" stopColor="#fff6d5" stopOpacity=".95" />
          <stop offset=".48" stopColor="#f8cd7e" stopOpacity=".4" />
          <stop offset="1" stopColor="#f8cd7e" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="chhathSunCore" cx="50%" cy="44%" r="56%">
          <stop offset="0" stopColor="#fff9e8" />
          <stop offset=".55" stopColor="#f8d28a" />
          <stop offset="1" stopColor="#e89245" />
        </radialGradient>
        <linearGradient id="chhathWater" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#a96a4c" />
          <stop offset=".38" stopColor="#4a756e" />
          <stop offset=".78" stopColor="#24555a" />
          <stop offset="1" stopColor="#14383c" />
        </linearGradient>
        <linearGradient id="chhathReflect" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fbe1a4" stopOpacity=".55" />
          <stop offset="1" stopColor="#fbe1a4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="chhathFlame" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fff5cc" />
          <stop offset="1" stopColor="#f0a94c" />
        </linearGradient>
        <g id="chhathDiyo">
          <ellipse cx="0" cy="6" fill="#f2c375" opacity=".22" rx="19" ry="5" />
          <path d="M-14 0C-9 8 9 8 14 0C8 6-8 6-14 0Z" fill="#e39b48" />
          <path d="M-11 0C-5-3 5-3 11 0Z" fill="#a96031" />
          <path d="M0-14C-6-8-4-3 0 0C4-3 6-8 0-14Z" fill="url(#chhathFlame)" />
        </g>
      </defs>

      <rect fill="url(#chhathSky)" height="700" width="900" />

      <g className="chhath-sun">
        <circle cx="646" cy="196" fill="url(#chhathSunGlow)" r="216" />
        <circle cx="646" cy="196" fill="url(#chhathSunCore)" r="82" />
        <circle
          cx="646"
          cy="196"
          fill="none"
          opacity=".35"
          r="118"
          stroke="#fbe7b8"
          strokeWidth="1.2"
        />
      </g>

      <g fill="none" opacity=".34" stroke="#5a3c2a" strokeLinecap="round" strokeWidth="2">
        <path d="M230 176c7-7 14-7 21 0 7-7 14-7 21 0" />
        <path d="M318 132c5-5 10-5 15 0 5-5 10-5 15 0" />
        <path d="M388 208c4-4 8-4 12 0 4-4 8-4 12 0" />
      </g>

      <g fill="#8a5a44" opacity=".42">
        <path d="M0 430V392C70 378 120 394 180 382C260 368 320 390 400 380C480 370 560 392 650 380C740 368 820 390 900 378V430Z" />
        <path d="M64 430V368H86V342L100 312L114 342V368H136V430Z" />
        <path d="M109 342L100 312L91 342Z" fill="#6f4436" />
        <path d="M742 430V384H760V364L772 340L784 364V384H802V430Z" />
      </g>

      <rect fill="url(#chhathWater)" height="270" width="900" y="430" />
      <path d="M586 430H706L754 700H538Z" fill="url(#chhathReflect)" opacity=".8" />
      <g fill="#fbe1a4">
        <rect height="3" opacity=".5" rx="1.5" width="130" x="580" y="456" />
        <rect height="3" opacity=".4" rx="1.5" width="90" x="600" y="486" />
        <rect height="4" opacity=".32" rx="2" width="160" x="566" y="524" />
        <rect height="3" opacity=".24" rx="1.5" width="110" x="590" y="570" />
        <rect height="3" opacity=".18" rx="1.5" width="180" x="554" y="624" />
      </g>

      <g fill="#123638">
        <path d="M0 470H150V492H204V516H258V544H306V700H0Z" />
        <path d="M900 458H760V484H708V510H656V540H606V700H900Z" />
      </g>
      <g opacity=".3" stroke="#8fb7ae" strokeWidth="1.2">
        <path d="M0 500H168" />
        <path d="M0 528H222" />
        <path d="M0 558H272" />
        <path d="M900 490H742" />
        <path d="M900 518H690" />
        <path d="M900 548H638" />
      </g>

      <g className="chhath-devotee" transform="translate(342 498)">
        <ellipse cx="0" cy="4" fill="#0b2426" opacity=".3" rx="46" ry="8" />
        <path d="M-28-8H28L24 108H-24Z" fill="#0b2426" />
        <circle cx="0" cy="-32" fill="#0b2426" r="16" />
        <path
          d="M-27 0C-45 12-50 32-43 48"
          fill="none"
          stroke="#0b2426"
          strokeLinecap="round"
          strokeWidth="10"
        />
        <path
          d="M27 0C45 12 50 32 43 48"
          fill="none"
          stroke="#0b2426"
          strokeLinecap="round"
          strokeWidth="10"
        />
        <ellipse cx="0" cy="36" fill="#f0b04e" opacity=".9" rx="29" ry="6" />
        <path d="M-13 31C-5 26 5 26 13 31" fill="none" opacity=".8" stroke="#fbe1a4" strokeWidth="2" />
        <ellipse
          cx="0"
          cy="10"
          fill="none"
          opacity=".28"
          rx="38"
          ry="6"
          stroke="#fbe1a4"
        />
      </g>

      <g className="chhath-devotee" opacity=".92" transform="translate(436 512) scale(.9)">
        <ellipse cx="0" cy="4" fill="#0b2426" opacity=".3" rx="46" ry="8" />
        <path d="M-28-8H28L24 108H-24Z" fill="#0b2426" />
        <circle cx="0" cy="-32" fill="#0b2426" r="16" />
        <path
          d="M-27 0C-45 12-50 32-43 48"
          fill="none"
          stroke="#0b2426"
          strokeLinecap="round"
          strokeWidth="10"
        />
        <path
          d="M27 0C45 12 50 32 43 48"
          fill="none"
          stroke="#0b2426"
          strokeLinecap="round"
          strokeWidth="10"
        />
        <ellipse
          cx="0"
          cy="10"
          fill="none"
          opacity=".24"
          rx="38"
          ry="6"
          stroke="#fbe1a4"
        />
      </g>

      <g className="chhath-diyo">
        <use href="#chhathDiyo" transform="translate(540 552) scale(.95)" />
      </g>
      <g className="chhath-diyo">
        <use href="#chhathDiyo" transform="translate(620 600) scale(1.1)" />
      </g>
      <g className="chhath-diyo">
        <use href="#chhathDiyo" transform="translate(492 626) scale(.8)" />
      </g>
      <g className="chhath-diyo">
        <use href="#chhathDiyo" transform="translate(714 640) scale(.9)" />
      </g>

      <g fill="none" opacity=".2" stroke="#d9f0e6" strokeWidth="1">
        <path d="M180 570c40-8 78-8 118 0" />
        <path d="M250 626c46-9 90-9 136 0" />
        <path d="M120 660c52-10 104-10 156 0" />
        <path d="M610 668c48-9 96-9 144 0" />
      </g>
    </svg>
  )
}

const garlandFlowers = Array.from({ length: 15 }, (_, index) => {
  const t = index / 14
  const x = (1 - t) ** 2 * 60 + 2 * (1 - t) * t * 450 + t ** 2 * 840
  const y = (1 - t) ** 2 * 64 + 2 * (1 - t) * t * 210 + t ** 2 * 64
  return { x, y, scale: 0.7 + Math.sin(Math.PI * t) * 0.32, t }
})

const tiharStars = [
  [82, 62, 1.2],
  [146, 118, 0.9],
  [212, 44, 1.4],
  [286, 92, 1],
  [344, 36, 0.8],
  [406, 124, 1.2],
  [470, 52, 1],
  [536, 104, 1.3],
  [602, 38, 0.9],
  [664, 126, 1.1],
  [724, 58, 1.4],
  [790, 108, 0.9],
  [846, 42, 1.2],
  [104, 208, 0.8],
  [268, 196, 1],
  [630, 202, 0.8],
  [818, 188, 1.1],
]

export function TiharScene({ className = '' }) {
  return (
    <svg
      aria-labelledby="tihar-art-title"
      className={`tihar-scene ${className}`}
      role="img"
      viewBox="0 0 900 700"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="tihar-art-title">
        An illustration of a Tihar courtyard at night: a doorway glowing with lamps, strings of
        marigold flowers, a rangoli on the floor, and diyas placed around it.
      </title>
      <defs>
        <linearGradient id="tiharNight" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#141b30" />
          <stop offset=".55" stopColor="#0b1020" />
          <stop offset="1" stopColor="#080b13" />
        </linearGradient>
        <linearGradient id="tiharWall" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#111728" />
          <stop offset="1" stopColor="#0a0e19" />
        </linearGradient>
        <radialGradient id="tiharDoorGlow">
          <stop offset="0" stopColor="#ffe9ad" />
          <stop offset=".5" stopColor="#f4bf5f" />
          <stop offset="1" stopColor="#c47a33" />
        </radialGradient>
        <radialGradient id="tiharFloorGlow">
          <stop offset="0" stopColor="#f2b84a" stopOpacity=".28" />
          <stop offset="1" stopColor="#f2b84a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="tiharGlow">
          <stop offset="0" stopColor="#ffd784" stopOpacity=".8" />
          <stop offset="1" stopColor="#f2b84a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="tiharWindowGlow">
          <stop offset="0" stopColor="#ffe6a6" stopOpacity=".95" />
          <stop offset="1" stopColor="#d58f42" stopOpacity=".5" />
        </radialGradient>
        <linearGradient id="tiharFlame" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fff6d0" />
          <stop offset="1" stopColor="#f2a84b" />
        </linearGradient>
        <g id="tiharMarigold">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((petal) => (
            <ellipse
              key={petal}
              cx="0"
              cy="-5.2"
              fill={petal % 2 === 0 ? '#f4c45a' : '#de9c23'}
              rx="2.8"
              ry="4.8"
              transform={`rotate(${petal * 45})`}
            />
          ))}
          <circle fill="#a8601c" r="3.2" />
        </g>
        <g id="tiharDiyo">
          <circle cx="0" cy="-6" fill="url(#tiharGlow)" opacity=".55" r="27" />
          <ellipse cx="0" cy="12" fill="#f2b84a" opacity=".14" rx="23" ry="5" />
          <path d="M-20 2C-13 14 13 14 20 2C12 9-12 9-20 2Z" fill="#b9712f" />
          <path d="M-17 2C-9-3 9-3 17 2Z" fill="#e6a34a" />
          <path
            className="tihar-flame"
            d="M0-18C-7-11-5-4 0 0C5-4 7-11 0-18Z"
            fill="url(#tiharFlame)"
          />
          <circle cx="0" cy="-1" fill="#3a2415" opacity=".7" r="1.6" />
        </g>
      </defs>

      <rect fill="url(#tiharNight)" height="700" width="900" />

      <g fill="#f6e6c8" opacity=".65">
        {tiharStars.map(([x, y, r], index) => (
          <circle key={index} cx={x} cy={y} opacity={index % 3 === 0 ? 0.5 : 0.9} r={r} />
        ))}
      </g>

      <rect fill="url(#tiharWall)" height="310" width="900" y="250" />
      <path d="M0 250H900V262H0Z" fill="#1d2437" opacity=".7" />
      <path d="M0 548H900V560H0Z" fill="#1a2030" opacity=".7" />
      <rect fill="#0d1220" height="300" width="26" x="126" y="262" />
      <rect fill="#0d1220" height="300" width="26" x="748" y="262" />

      <g>
        <path d="M180 430V374C180 348 198 334 216 334C234 334 252 348 252 374V430Z" fill="url(#tiharWindowGlow)" opacity=".8" />
        <path d="M648 430V374C648 348 666 334 684 334C702 334 720 348 720 374V430Z" fill="url(#tiharWindowGlow)" opacity=".8" />
        <path d="M216 334V430" stroke="#0d1220" strokeWidth="3" />
        <path d="M684 334V430" stroke="#0d1220" strokeWidth="3" />
        <path d="M180 430H252" stroke="#2a3146" strokeWidth="3" />
        <path d="M648 430H720" stroke="#2a3146" strokeWidth="3" />
      </g>

      <ellipse cx="450" cy="606" fill="url(#tiharFloorGlow)" rx="270" ry="82" />
      <path
        d="M355 560V376C355 322 398 300 450 300C502 300 545 322 545 376V560Z"
        fill="url(#tiharDoorGlow)"
        opacity=".92"
      />
      <path
        d="M362 560V378C362 330 401 310 450 310C499 310 538 330 538 378V560"
        fill="none"
        stroke="#ffe9ad"
        strokeOpacity=".65"
        strokeWidth="1.4"
      />
      <path d="M450 310V560" stroke="#b9712f" strokeOpacity=".4" strokeWidth="1.2" />
      <rect fill="#1a1520" height="6" width="200" x="350" y="556" rx="2" />

      <path
        d="M60 64Q450 210 840 64"
        fill="none"
        stroke="#7b6a34"
        strokeOpacity=".75"
        strokeWidth="1.3"
      />
      {garlandFlowers.map(({ x, y, scale, t }, index) => (
        <g key={index}>
          <ellipse
            cx={x - 7}
            cy={y + 5}
            fill="#4c5a34"
            opacity=".8"
            rx="2.6"
            ry="6"
            transform={`rotate(38 ${x - 7} ${y + 5})`}
          />
          <ellipse
            cx={x + 7}
            cy={y + 5}
            fill="#5d6b3b"
            opacity=".75"
            rx="2.4"
            ry="5.4"
            transform={`rotate(-38 ${x + 7} ${y + 5})`}
          />
          <use
            href="#tiharMarigold"
            transform={`translate(${x} ${y}) scale(${scale})`}
            opacity={0.88 + Math.sin(t * Math.PI) * 0.1}
          />
        </g>
      ))}

      <g stroke="#7b6a34" strokeOpacity=".7" strokeWidth="1.1">
        <path d="M376 330V520" fill="none" />
        <path d="M524 330V520" fill="none" />
      </g>
      {[348, 392, 436, 480].map((y) => (
        <g key={`left-${y}`}>
          <use href="#tiharMarigold" transform={`translate(376 ${y}) scale(.62)`} />
          <use href="#tiharMarigold" transform={`translate(524 ${y}) scale(.62)`} />
        </g>
      ))}

      <g className="tihar-rangoli" fill="none" stroke="#f2b84a" opacity=".52">
        <g transform="translate(450 612) scale(1 .36)">
          <circle r="86" strokeWidth="1.2" />
          <circle r="58" strokeWidth="1" />
          <circle r="30" strokeWidth="1" />
          {Array.from({ length: 12 }, (_, index) => (
            <path
              key={index}
              d="M0-82Q16-56 0-28Q-16-56 0-82Z"
              strokeWidth="1.1"
              transform={`rotate(${index * 30})`}
            />
          ))}
          {Array.from({ length: 16 }, (_, index) => {
            const angle = (index * 22.5 * Math.PI) / 180
            return (
              <circle
                key={index}
                cx={Math.cos(angle) * 72}
                cy={Math.sin(angle) * 72}
                fill="#f2b84a"
                r="2"
                stroke="none"
              />
            )
          })}
        </g>
      </g>

      <g>
        <use href="#tiharDiyo" transform="translate(388 558) scale(.82)" />
        <use href="#tiharDiyo" transform="translate(512 558) scale(.82)" />
        <use href="#tiharDiyo" transform="translate(282 600) scale(.95)" />
        <use href="#tiharDiyo" transform="translate(618 600) scale(.95)" />
        <use href="#tiharDiyo" transform="translate(344 646) scale(.85)" />
        <use href="#tiharDiyo" transform="translate(556 646) scale(.85)" />
        <use href="#tiharDiyo" transform="translate(450 668) scale(.78)" />
        <use href="#tiharDiyo" transform="translate(210 660) scale(.7)" opacity=".85" />
        <use href="#tiharDiyo" transform="translate(690 660) scale(.7)" opacity=".85" />
      </g>

      <g fill="none" opacity=".18" stroke="#f2b84a" strokeWidth="1">
        <path d="M300 590c34-6 66-6 100 0" />
        <path d="M500 590c34-6 66-6 100 0" />
        <path d="M330 624c80-10 160-10 240 0" />
      </g>
    </svg>
  )
}

export function TransitionDiyas({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 900 130"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="rowGlow">
          <stop offset="0" stopColor="#ffd784" stopOpacity=".65" />
          <stop offset="1" stopColor="#f2b84a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rowFlame" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fff5cd" />
          <stop offset="1" stopColor="#f0a94c" />
        </linearGradient>
        <g id="rowDiyo">
          <circle cx="0" cy="-4" fill="url(#rowGlow)" r="24" />
          <path d="M-17 2C-11 12 11 12 17 2C10 8-10 8-17 2Z" fill="#b9712f" />
          <path d="M-14 2C-7-2 7-2 14 2Z" fill="#e3a149" />
          <path d="M0-16C-6-10-4-3 0 0C4-3 6-10 0-16Z" fill="url(#rowFlame)" />
        </g>
      </defs>
      <path d="M40 108H860" stroke="#ecdcc4" strokeOpacity=".18" strokeWidth="1" />
      {[0, 1, 2, 3, 4, 5, 6].map((index) => {
        const x = 90 + index * 120
        return (
          <g className="transit-diya" key={index}>
            <use href="#rowDiyo" transform={`translate(${x} 92)`} />
            <ellipse cx={x} cy="112" fill="#f2b84a" opacity=".14" rx="24" ry="3" />
          </g>
        )
      })}
    </svg>
  )
}

export function ClosingDiyas({ lit = false, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={`closing-diyas ${lit ? 'is-lit' : ''} ${className}`}
      fill="none"
      viewBox="0 0 560 130"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="closingGlow">
          <stop offset="0" stopColor="#ffd784" stopOpacity=".9" />
          <stop offset=".55" stopColor="#f2b84a" stopOpacity=".28" />
          <stop offset="1" stopColor="#f2b84a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="closingFlame" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fff7d8" />
          <stop offset="1" stopColor="#e9953f" />
        </linearGradient>
        <g id="closingDiyo">
          <path d="M-21 2C-14 14 14 14 21 2C13 9-13 9-21 2Z" fill="#8a5a2b" />
          <path d="M-18 2C-9-3 9-3 18 2Z" fill="#c98a43" />
          <path
            className="flame"
            d="M0-21C-8-13-5-4 0 0C5-4 8-13 0-21Z"
            fill="url(#closingFlame)"
          />
          <circle cx="0" cy="-1" fill="#5b371c" r="1.8" />
        </g>
      </defs>
      <path d="M40 108H520" stroke="#9f3f22" strokeOpacity=".2" strokeWidth="1" />
      {[0, 1, 2, 3, 4].map((index) => {
        const x = 80 + index * 100
        return (
          <g key={index} style={{ '--i': index }}>
            <circle className="halo" cx={x} cy="66" fill="url(#closingGlow)" r="38" />
            <use href="#closingDiyo" transform={`translate(${x} 92)`} />
            <ellipse cx={x} cy="112" fill="#b95f24" opacity=".12" rx="26" ry="3" />
          </g>
        )
      })}
    </svg>
  )
}
