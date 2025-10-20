export const sateliteProducts = [
  {
    id: "product01",
    name: "AX-03",
    formFactor: "3U/4U CubeSat",
    payloadVolume: "2U",
    orbitCompatibility: "Primarily LEO",
    description:
      "Preconfigured for multiple applications, the 3U CubeSat assimilates flight-proven subsystems and advanced features:",
    image: {
      src: "/assets/AX-03-dark.png",
      alt: "ax-03",
      width: 768,
      height: 586
    },
    bannerImage: {
      src: "/assets/ax-03-inner-banner.png",
      alt: "ax-03-banner",
      width: 791,
      height: 574
    },
    specifications: [
      { text: "OBC", highlight: "SMART FUSION 2, ARM CORTEX M3" },
      { text: "POWER BUSES", highlight: "3.3V, 5V, CUSTOMIZABLE 5–12V + BATTERY RAW" },
      { text: "COMMUNICATION", highlight: "UHF, S-BAND, CCSDS COMPLIANT" },
      { text: "PAYLOAD POWER", highlight: "48W" }
    ],
    types: [
      {
        name: "3U",
        tag: "About the satelite",
        description: "Preconfigured for multiple applications, the 3U CubeSat assimilates flight-proven subsystems ",
        image: {
          src: "/assets/inner-3u-img-1.png",
          alt: "ax-03-3u",
          width: 400,
          height: 348
        },
        specifications: [
          { text: "STRUCTURAL DIMENSIONS", highlight: "100mm * 100mm * 340.5mm" },
          { text: "COMMUNICATION", highlight: "UHF, S-BAND, CCSDS COMPLIANT" },
          { text: "INTERFACES", highlight: "I2C, UART, RS232, RS422, SPI, LVDS, CAN" },
          { text: "DATA STORAGE", highlight: "16GB" },
          { text: "AVAILABLE PAYLOAD MASS", highlight: "2KG" },
          { text: "OBC", highlight: "SMART FUSION 2, ARM CORTEX M3" },
          { text: "POWER BUSES", highlight: "3.3V, 5V, CUSTOMIZABLE 5–12V + BATTERY RAW" },
          { text: "PAYLOAD VOLUME", highlight: "1U" },
          {
            text: "Telemetry Data Rate",
            highlights: [
              { text: "2.4-19.2 KBPS (UHF WITH GFSK/GMSK MODULATION SCHEME)" },
              { text: "UPTO 10MBPS (SBAND WITH BPSK,QPSK,OQPSK)" },
            ]
          },
          { text: "PAYLOAD POWER", highlight: "48W" },
          
        ]
      },
      {
        name: "4U",
        tag: "About the satelite 4U",
        description: "A compact CubeSat Bus engineered for agility and efficiency. Lightweight yet reliable, it delivers flexible payload capacity and scalable power for smaller missions.",
        image: {
          src: "/assets/inner-4u-img-2.png",
          alt: "ax-03-6u",
          width: 400,
          height: 348
        },
        specifications: [
          { text: "STRUCTURAL DIMENSIONS", highlight: "100mm * 100mm * 454mm " },
          { text: "COMMUNICATION", highlight: "UHF, S-BAND, CCSDS COMPLIANT" },
          { text: "INTERFACES", highlight: "I2C, UART, RS232, RS422, SPI, LVDS, CAN" },
          { text: "DATA STORAGE", highlight: "16GB" },
          { text: "AVAILABLE PAYLOAD MASS", highlight: "4kg" },
          { text: "OBC", highlight: "SMART FUSION 2, ARM CORTEX M3" },
          { text: "POWER BUSES", highlight: "3.3V, 5V, CUSTOMIZABLE 6–15V + BATTERY RAW" },
          { text: "PAYLOAD VOLUME", highlight: "2U" },
          { text: "PAYLOAD POWER", highlight: "48W" },

          {
            text: "Telemetry Data Rate",
            highlights: [
              { text: "2.4-19.2 KBPS (UHF WITH GFSK/GMSK MODULATION SCHEME)" },
              { text: "UPTO 10MBPS (SBAND WITH BPSK,QPSK,OQPSK)" },
            ]
          },
          
        ]
      }
    ]
  },
  {
    id: "product02",
    name: "AX-06",
    formFactor: "6/8U CubeSat",
    payloadVolume: "5U",
    orbitCompatibility: "SmartFusion2",
    description:
      "High-performance, high-TRL bus for commercial and scientific missions:",
    image: {
      src: "/assets/ax-06.png",
      alt: "ax-06",
      width: 654,
      height: 385
    },
    bannerImage: {
      src: "/assets/ax-03-inner-banner.png",
      alt: "ax-03-banner",
      width: 791,
      height: 574
    },
    specifications: [
      { text: "OBC", highlight: "SMARTFUSION2, ARM CORTEX M3" },
      { text: "POWER BUSES", highlight: "3.3V, 5V, CUSTOMIZABLE 5–12V + BATTERY RAW" },
      { text: "COMMUNICATION", highlight: "UHF, X-BAND, S-BAND (OPTIONAL), CCSDS COMPLIANT" },
      { text: "PAYLOAD POWER", highlight: "48W" }
    ],
    types: [
      {
        name: "6U",
        tag: "About the satelite",
        description: "Optimized for general-purpose missions with balanced power and payload capacity.",
        image: {
          src: "/assets/inner-6u-img.png",
          alt: "ax-03-3u",
          width: 400,
          height: 348
        },
        specifications: [
          { text: "STRUCTURAL DIMENSIONS", highlight: "100mm * 226.3mm * 366mm " },
          { text: "COMMUNICATION", highlight: "UHF, X-BAND, S-BAND (OPTIONAL), CCSDS COMPLIANT " },
          { text: "INTERFACES", highlight: "I2C, UART, RS232, RS422, SPI, LVDS, CAN " },
          { text: "DATA STORAGE", highlight: "16GB " },
          { text: "AVAILABLE PAYLOAD MASS", highlight: "6KG" },
          { text: "OBC", highlight: "SMARTFUSION2, ARM CORTEX M3 " },
          { text: "POWER BUSES", highlight: "3.3V, 5V, CUSTOMIZABLE 5–12V + BATTERY RAW" },
          { text: "PAYLOAD VOLUME", highlight: "3U" },
          
          {
            text: "Telemetry Data Rate",
            highlights: [
              { text: "2.4-19.2 KBPS  (UHF WITH GFSK/GMSK  MODULATION SCHEME) " },
              { text: "UPTO 10MBPS  ( SBAND WITH BPSK,QPSK,OQPSK) " },
              { text: "UPTO 200 MBPS  (XBAND WITH GMSK,BPSK,QPSK,8-PSK,16-APSK) " },
            ]
          },
            
          { text: "PAYLOAD POWER", highlight: "48W " },
        ]
      },
      {
        name: "8U",
        tag: "About the satelite",
        description: "A high-performance CubeSat Bus designed for advanced commercial and scientific missions. Compact yet powerful, it balances payload capacity, power flexibility, and reliable COMMUNICATIONs.",
        image: {
          src: "/assets/inner-8u-img.png",
          alt: "ax-03-6u",
          width: 400,
          height: 348
        },
        specifications: [
          { text: "STRUCTURAL DIMENSIONS", highlight: "100mm * 226.3mm * 454mm " },
          { text: "COMMUNICATION", highlight: "UHF, X-BAND, S-BAND (OPTIONAL), CCSDS COMPLIANT " },
          { text: "INTERFACES", highlight: "I2C, UART, RS232, RS422, SPI, LVDS, CAN  " },
          { text: "DATA STORAGE", highlight: "16GB " },
          { text: "AVAILABLE PAYLOAD MASS", highlight: "8kg " },
          { text: "OBC", highlight: "SMARTFUSION2, ARM CORTEX M3 " },
          { text: "POWER BUSES", highlight: "3.3V, 5V, CUSTOMIZABLE 6–15V + BATTERY RAW " },
          { text: "PAYLOAD VOLUME", highlight: "4U" },
          { text: "PAYLOAD POWER", highlight: "48W " },

          {
            text: "Telemetry Data Rate",
            highlights: [
              { text: "2.4-19.2 KBPS  (UHF WITH GFSK/GMSK  MODULATION SCHEME) " },
              { text: "UPTO 10MBPS  ( SBAND WITH BPSK,QPSK,OQPSK) " },
              { text: "UPTO 200 MBPS  (XBAND WITH GMSK,BPSK,QPSK,8-PSK,16-APSK) " },
            ]
          },
          
        ]
      }
    ]
  },
  {
    id: "product03",
    name: "AX-12",
    formFactor: "12/16U CubeSat",
    payloadVolume: "10U",
    orbitCompatibility: "Primarily LEO",
    description:
      "For demanding missions with high payload and power requirements:",
    image: {
      src: "/assets/ax-12.png",
      alt: "ax-12",
      width: 688,
      height: 586
    },
    bannerImage: {
      src: "/assets/ax-03-inner-banner.png",
      alt: "ax-03-banner",
      width: 791,
      height: 574
    },
    specifications: [
      { text: "OBC", highlight: "SMARTFUSION2, ARM CORTEX M3 / POLARFIRE OBC" },
      { text: "POWER BUSES", highlight: "3.3V, 5V, CUSTOMIZABLE 6–12V + BATTERY RAW" },
      { text: "COMMUNICATION", highlight: "UHF, X-BAND, K-BAND" },
      { text: "PAYLOAD POWER", highlight: "48W" }
    ],
    types: [
      {
        name: "12U",
        tag: "About the satelite",
        description: "Optimized for general-purpose missions with balanced power and payload capacity.",
        image: {
          src: "/assets/inner-12u-img.png",
          alt: "ax-03-3u",
          width: 400,
          height: 348
        },
        specifications: [
          { text: "STRUCTURAL DIMENSIONS", highlight: "226.3mm * 226.3mm * 226.3mm " },
          { text: "COMMUNICATION", highlight: "UHF, X-Band, K-Band " },
          { text: "INTERFACES", highlight: "I2C, UART, RS232, RS422, SPI, LVDS, CAN " },
          { text: "DATA STORAGE", highlight: "64GB " },
          { text: "AVAILABLE PAYLOAD MASS", highlight: "12KG " },
          { text: "OBC", highlight: "SMARTFUSION2, ARM CORTEX M3 / POLARFIRE OBC " },
          { text: "POWER BUSES", highlight: "3.3V, 5V, CUSTOMIZABLE 6–12V + BATTERY RAW " },
          { text: "PAYLOAD VOLUME", highlight: "6U" },
          { text: "PAYLOAD POWER", highlight: "48W " },
          {
            text: "Telemetry Data Rate",
            highlights: [
              { text: "2.4-19.2 KBPS (UHF WITH GFSK/GMSK MODULATION SCHEME)" },
              { text: "UPTO 10MBPS (SBAND WITH BPSK,QPSK,OQPSK)" },
              { text: "UPTO 200 MBPS (XBAND WITH GMSK,BPSK,QPSK,8-PSK,16-APSK)" },
              { text: "UPTO 250MBPS (K BAND QPSK,8-PSK,16-APSK,32-APSK)" }
            ]
          },
          
        ]
      },
      {
        name: "16U",
        tag: "About the satelite",
        description: "A versatile CubeSat bus built for ambitious missions. Mid-sized and scalable, it offers larger payload capacity, robust power, and advanced COMMUNICATION options.",
        image: {
          src: "/assets/inner-16u-img.png",
          alt: "ax-03-6u",
          width: 400,
          height: 348
        },
        specifications: [
          { text: "STRUCTURAL DIMENSIONS", highlight: "226.3mm * 226.3mm * 454mm " },
          { text: "COMMUNICATION", highlight: "UHF, X-BAND, K-BAND " },
          { text: "INTERFACES", highlight: "I2C, UART, RS232, RS422, SPI, LVDS, CAN " },
          { text: "DATA STORAGE", highlight: "64GB " },
          { text: "AVAILABLE PAYLOAD MASS", highlight: "16KG" },
          { text: "OBC", highlight: "SMARTFUSION2, ARM CORTEX M3 / POLARFIRE OBC " },
          { text: "POWER BUSES", highlight: "3.3V, 5V, CUSTOMIZABLE 6–12V + BATTERY RAW " },
          { text: "PAYLOAD VOLUME", highlight: "8U" },
          { text: "PAYLOAD POWER", highlight: "48W " },

          {
            text: "Telemetry Data Rate",
            highlights: [
              { text: "2.4-19.2 KBPS (UHF WITH GFSK/GMSK MODULATION SCHEME)" },
              { text: "UPTO 10MBPS (SBAND WITH BPSK,QPSK,OQPSK)" },
              { text: "Upto 200 Mbps (XBand with GMSK,BPSK,QPSK,8-PSK,16-APSK)" },
              { text: "UPTO 250MBPS (K BAND QPSK,8-PSK,16-APSK,32-APSK)" }
            ]
          },
          
        ]
      }
    ]
  },
  {
    id: "product04",
    name: "AX-27",
    formFactor: "27U CubeSat",
    payloadVolume: "20U",
    orbitCompatibility: "Primarily LEO",
    description:
      "Built with modular, scalable, reconfigurable architecture, meets defense standards:",
    image: {
      src: "/assets/ax-27.png",
      alt: "ax-27",
      width: 688,
      height: 586
    },
    bannerImage: {
      src: "/assets/ax-03-inner-banner.png",
      alt: "ax-03-banner",
      width: 791,
      height: 574
    },
    specifications: [
      { text: "OBC", highlight: "POLAR FIRE" },
      { text: "POWER BUSES", highlight: "3.3V, 5V, CUSTOMIZABLE 5–12V, CUSTOMIZABLE 12–28V + BATTERY RAW" },
      { text: "COMMUNICATION", highlight: "UHF, X-BAND, S-BAND (OPTIONAL), K-BAND" },
      { text: "PAYLOAD POWER", highlight: "60W" }
    ],
    types: [
      {
        name: "27U",
        tag: "About the satelite",
        description: "Optimized for general-purpose missions with balanced power and payload capacity.",
        image: {
          src: "/assets/inner-27u-img.png",
          alt: "ax-03-3u",
          width: 400,
          height: 348
        },
        specifications: [
          { text: "STRUCTURAL DIMENSIONS", highlight: "300mm * 300mm * 300mm" },
          { text: "COMMUNICATION", highlight: "UHF, X-BAND, S-BAND (OPTIONAL),K-BAND " },
          { text: "INTERFACES", highlight: "I2C, UART, RS232, RS422, SPI, LVDS, CAN " },
          { text: "DATA STORAGE", highlight: "128GB " },
          { text: "AVAILABLE PAYLOAD MASS", highlight: "36KG" },
          { text: "OBC", highlight: "POLAR FIRE " },
          { text: "POWER BUSES", highlight: "3.3V, 5V, CUSTOMIZABLE 5–12V, CUSTOMIZABLE 12–28V + BATTERY RAW " },
          { text: "PAYLOAD VOLUME", highlight: "18U" },
          { text: "PAYLOAD POWER", highlight: "60W" },

          {
          text: "Telemetry Data Rate",
          highlights: [
            { text: "19.2 KBPS (UHF WITH GFSK/GMSK MODULATION SCHEME)" },
            { text: "UPTO 10MBPS (SBAND WITH BPSK,QPSK,OQPSK)" },
            { text: "UPTO 200 MBPS (XBAND WITH GMSK,BPSK,QPSK,8-PSK,16-APSK)" },
            { text: "UPTO 250MBPS (K BAND QPSK,8-PSK,16-APSK,32-APSK) " }
          ]
        },
          
        ]
      },
      
    ]
  },
  {
    id: "product05",
    name: "NX-50",
    formFactor: "Customizable MicroSat",
    payloadVolume: "Customizable",
    description:
      "Built with modular, scalable, reconfigurable architecture, meets defense standards:",
    image: {
      src: "/assets/nx-50.png",
      alt: "ax-03",
      width: 768,
      height: 586
    },
    bannerImage: {
      src: "/assets/ax-03-inner-banner.png",
      alt: "ax-03-banner",
      width: 791,
      height: 574
    },
    specifications: [
      { text: "OBC", highlight: "POLAR FIRE" },
      { text: "POWER BUSES", highlight: "3.3V, 5V, CUSTOMIZABLE 6-28V" },
      { text: "COMMUNICATION", highlight: "UHF, X-BAND, S-BAND (OPTIONAL), K-BAND" },
      { text: "PAYLOAD POWER", highlight: "100W" }
    ],
    types: [
      {
        tag: "About the satelite",
        description: "Preconfigured for multiple applications, the 3U CubeSat assimilates flight-proven subsystems.",
        image: {
          src: "/assets/inner-nx-50.png",
          alt: "ax-03-3u",
          width: 400,
          height: 348
        },
        specifications: [
          { text: "OBC ", highlight: "POLAR FIRE" },
          { text: "COMMUNICATION", highlight: "UHF, X-BAND,S-BAND (OPTIONAL),K-BAND" },
          { text: "POWER BUSES", highlight: "3.3V, 5V, CUSTOMIZABLE 6-28V" },
          { text: "PAYLOAD POWER", highlight: "100W" }
        ]
      },
    ]
  }
];