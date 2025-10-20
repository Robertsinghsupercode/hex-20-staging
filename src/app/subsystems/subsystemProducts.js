export const subsystemProducts = [
  {
    id: "ssproduct1",
    bannerImage: "/assets/inner-page-banner-ss.png",
    title: "Electrical Power Subsystem (EPS 840)",
    description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    image: "/assets/eps-840v.png",
    alt: "eps-840v",
    width: 553,
    height: 419,
    items: [
      { text: "BUS VOLTAGE ", highlight: "8.4V (NOMINAL) CAN BE CONFIGURED ON REQUEST" },
      { text: "COMMUNICATION WITH C&DH ", highlight: "4 X SPI CHANNELS" },
      { text: "DIMENSIONS ", highlight: "PC104" },
      { text: "MASS ", highlight: "<100G" }
    ],
    innerPage: {
      bannerImage: {
        src: "/assets/eps-innerpage-banner.png",
        alt: "eps-840v-inner-page",
        width: 775,
        height: 328,
      },
      bannerTitle: "EPS (840)",
      tag: "Specifications",
      // description: "Preconfigured for multiple applications, the 3U CubeSat assimilates flight-proven subsystems ",
      specifications: [
        {
          title: "BUS VOLTAGE",
          items: [
            { text: "8.4V (NOMINAL) CAN BE CONFIGURED ON REQUEST" },
          ]
        },
        {
          title: "OUTPUT CHANNELS",
          items: [
            { text: "CHANNEL1: 3.3V CHANNEL AT 1A" },
            { text: "CHANNEL2: 1 X 5V – 6V CHANNEL AT 2A" },
            { text: "CHANNEL3: 3 X 12V CHANNEL AT 4A WITH INDIVIDUAL SWITCHES" },
          ]
        },
        {
          title: "MAXIMUM POWER POINT TRACKING (MPPT)",
          items: [
            { text: "4 CHANNEL INPUT FROM SOLAR PANELS" },
            { text: "INPUT VOLTAGE: >=10V" },
            { text: "OUTPUT VOLTAGE: CONFIGURATION DEPENDANT" },
            { text: "MAXIMUM OUTPUT CURRENT: 2A" },
          ]
        },
        {
          title: "COMMUNICATION WITH C&DH",
          items: [
            { text: "4 X SPI CHANNELS" },
          ]
        },
        {
          title: "Other Features",
          items: [
            { text: "VOLTAGE, CURRENT AND TEMPERATURE (VIT) MEASUREMENT" },
            { text: "SATELLITE DEPLOYMENT SENSING" },
            { text: "CHANNELS FOR BATTERY HEATER" },
            { text: "OVER CHARGING PROTECTION FOR BATTERIES" },
            { text: "OVER CURRENT CUT-OFF FOR ALL OUTPUT CHANNELS" },
          ]
        },
        {
          title: "DIMENSIONS",
          items: [
            { text: "PC104" },
          ]
        },
        {
          title: "MASS",
          items: [
            { text: "<100G" },
          ]
        }
      ]
    },
  },
  {
    id: "ssproduct2",
    title: "Electrical Power Subsystem (EPS 168)",
    bannerImage: "/assets/inner-page-banner-ss.png",
    description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    image: "/assets/eps-168v.png",
    alt: "eps-168",
    width: 553,
    height: 419,
    items: [
      { text: "BUS VOLTAGE ", highlight: "16.8V (NOMINAL) CAN BE CONFIGURED ON REQUEST" },
      { text: "COMMUNICATION WITH C&DH ", highlight: "3 X SPI CHANNELS" },
      { text: "MAXIMUM POWER POINT TRACKING (MPPT) ", highlight: "4 CHANNELS INPUT FROM SOLAR PANEL" },
      { text: "OTHER FEATURES ", highlight: "VOLTAGE, CURRENT AND TEMPERATURE" }
    ],
    innerPage: {
      bannerImage: {
        src: "/assets/eps-168v-inner-page-banner.png",
        alt: "eps-168v-inner-page",
        width: 1200,
        height: 400
      },
      bannerTitle: "EPS 168",
      tag: "Specification",
      // description: "The EPS 168V offers advanced power management for CubeSats, featuring multiple input channels and robust monitoring capabilities for mission-critical applications.",
      specifications: [
        {
          title: "BUS VOLTAGE",
          items: [
            { text: "16.8V (NOMINAL) CAN BE CONFIGURED ON REQUEST" }
          ]
        },
        {
          title: "MAXIMUM POWER POINT TRACKING (MPPT)",
          items: [
            { text: "4 CHANNELS INPUT FROM SOLAR PANEL " },
            { text: "INPUT VOLTAGE: >=18V " },
            { text: "OUTPUT VOLTAGE: 16.8 " },
            { text: "MAXIMUM OUTPUT CURRENT: 3A " }
          ]
        },
        {
          title: "OTHER FEATURES",
          items: [
            { text: "VOLTAGE, CURRENT AND TEMPERATURE (VIT) MEASUREMENT" },
            { text: "SATELLITE DEPLOYMENT SENSING  " },
            { text: "CHANNELS FOR BATTERY HEATER " },
            { text: "OVER CHARGING PROTECTION FOR BATTERIES  " }
          ]
        },
        {
          title: "OUTPUT CHANNELS",
          items: [
            { text: "CHANNEL1: 3.3V CHANNELS AT 3A" },
            { text: "CHANNEL2: 1 X 5V – 6V CHANNEL AT 3A " },
            { text: "CHANNEL3: 2 X 12V CHANNEL AT 2A WITH INDIVIDUAL SWITCHES " },
            { text: "CHANNEL3: 3 X 12V CHANNEL AT 4A WITH INDIVIDUAL SWITCHES " }
          ]
        },
        {
          title: "COMMUNICATION WITH C&DH",
          items: [
            { text: "3 X SPI CHANNELS" }
          ]
        }
      ]
    },
  },
  {
    id: "ssproduct3",
    title: "Battery Pack 100W",
    bannerImage: "/assets/battery.png",
    description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    image: "/assets/battery-pack-100w.png",
    alt: "battery-pack-100w",
    width: 553,
    height: 419,
    items: [
      { text: "BUS VOLTAGE ", highlight: "8.4V (STANDARD) OR CAN BE CONFIGURED" },
      { text: "Preferred Battery ", highlight: "NCR18650B" },
      { text: "Battery Configuration ", highlight: "2S2P (STANDARD) OR CAN BE CONFIGURED" },
      { text: "DIMENSIONS ", highlight: "PC 104" }
    ],
    innerPage: {
      bannerImage: {
        src: "/assets/battery-pack-100w-inner-page-banner.png",
        alt: "battery-pack-100w-inner-page",
        width: 1200,
        height: 400
      },
      bannerTitle: "Battery Pack 100W",
      tag: "Specifications",
      // description: "The Battery Pack 100W provides reliable energy storage for small satellites, with a configurable design to meet diverse mission requirements.",
      specifications: [
        {
          title: "POWER",
          items: [
            { text: "100W" }
          ]
        },
        {
          title: "BUS VOLTAGE",
          items: [
            { text: "8.4V (STANDARD) OR CAN BE CONFIGURED" },
          ]
        },
        {
          title: "BATTERY CONFIGURATION",
          items: [
            { text: "2S2P (STANDARD) OR CAN BE CONFIGURED" },
          ]
        },
        {
          title: "PREFERRED BATTERY",
          items: [
            { text: "NCR18650B" }
          ]
        },
        {
          title: "MASS",
          items: [
            { text: "<280G" },
          ]
        },
        {
          title: "DIMENSIONS",
          items: [
            { text: "PC 104" }
          ]
        },
        {
          title: "OTHER FEATURES",
          items: [
            { text: "BATTERY TEMPERATURE SENSOR CONNECTORS" },
            { text: "BATTERY HEATER CONNECTORS" },
            { text: "1 X REMOVE BEFORE FLIGHT SWITCH CONNECTOR" }
          ]
        },
        {
          title: "OPERATING TEMPERATURE",
          items: [
            { text: "0°C to 65°C" }
          ]
        }
      ]
    },
  },
  {
    id: "ssproduct4",
    title: "Battery Pack 150W",
    bannerImage: "/assets/battery.png",
    description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    image: "/assets/battery-pack-150w.png",
    alt: "battery-pack-150w",
    width: 553,
    height: 419,
    items: [
      { text: "BUS VOLTAGE ", highlight: "16.8V (STANDARD) OR CAN BE CONFIGURED" },
      { text: "DIMENSIONS ", highlight: "PC104" },
      { text: "BATTERY CONFIGURATION ", highlight: "4S3P (STANDARD) OR CAN BE CONFIGURED" },
      { text: "OPERATING TEMPERATURE ", highlight: "0°C to 65°C" }
    ],
    innerPage: {
      bannerImage: {
        src: "/assets/battery-pack-150w-inner-page-banner.png",
        alt: "battery-pack-150w-inner-page",
        width: 1200,
        height: 400
      },
      bannerTitle: "Battery Pack 150W",
      tag: "Specifications",
      // description: "The Battery Pack 150W is designed for missions requiring higher power storage, offering a robust and configurable solution for extended operations.",
      specifications: [
        {
          title: "POWER",
          items: [
            { text: "150W " }
          ]
        },
        {
          title: "BUS VOLTAGE",
          items: [
            { text: "16.8V (STANDARD) OR CAN BE CONFIGURED " },
          ]
        },
        {
          title: "BATTERY CONFIGURATION",
          items: [
            { text: "4S3P (STANDARD) OR CAN BE CONFIGURED  " },
          ]
        },
        {
          title: "PREFERRED BATTERY",
          items: [
            { text: "NCR18650B " }
          ]
        },
        {
          title: "MASS",
          items: [
            { text: "<380g  " },
          ]
        },
        {
          title: "DIMENSIONS",
          items: [
            { text: "PC104  " }
          ]
        },
        {
          title: "OTHER FEATURES",
          items: [
            { text: "BATTERY TEMPERATURE SENSOR CONNECTORS " },
            { text: "BATTERY HEATER CONNECTORS " },
            { text: "1 X REMOVE BEFORE FLIGHT SWITCH CONNECTOR " }
          ]
        },
        {
          title: "OPERATING TEMPERATURE",
          items: [
            { text: "0°C to 65°C   " }
          ]
        }
      ]
    },
  },
  {
    id: "ssproduct5",
    title: "UHF-VHF Transceiver",
        bannerImage: "/assets/uhf.png",
    description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    image: "/assets/vhf-transceiver.png",
    alt: "vhf-transceiver",
    width: 553,
    height: 419,
    items: [
      { text: "VHF FREQUENCY RANGE ", highlight: " '144-146 MHZ' (CONFIGURABLE)" },
      { text: "RF TRANSMITTER POWER OUTPUT ", highlight: "1W/30DBM OR 2W/33DBM" },
      { text: "UHF FREQUENCY RANGE ", highlight: "435-438MHZ (CONFIGURABLE)" },
      { text: "POWER SUPPLY ", highlight: "5.0 VDC & 3.3V DC" }
    ],
    innerPage: {
      bannerImage: {
        src: "/assets/vhf-transceiver-inner-page-banner.png",
        alt: "vhf-transceiver-inner-page",
        width: 1200,
        height: 400
      },
      bannerTitle: "UHF/VHF Transceiver",
      tag: "Specifications",
      // description: "The UHF/VHF Transceiver ensures reliable communication for small satellites, supporting configurable frequency ranges and high-power output for mission success.",
      specifications: [
        {
          title: "VHF FREQUENCY RANGE",
          items: [
            { text: "144-146 MHZ(CONFIGURABLE) " }
          ]
        },
        {
          title: "UHF FREQUENCY RANGE",
          items: [
            { text: "435-438MHZ(CONFIGURABLE) " },
          ]
        },
        {
          title: "FREQUENCY RESOLUTION",
          items: [
            { text: "1KHz" },
          ]
        },
        {
          title: "BANDWIDTH",
          items: [
            { text: "12.5Khz " }
          ]
        },
        {
          title: "RF TRANSMITTER POWER OUTPUT",
          items: [
            { text: "1W/30DBM OR 2W/33DBM " },
          ]
        },
        {
          title: "RF RECEIVER SENSITIVITY",
          items: [
            { text: "-110DBM " }
          ]
        },
        {
          title: "RF DATA RATE",
          items: [
            { text: "1.2KBPS " },
          ]
        },
        {
          title: "RADIO MODE",
          items: [
            { text: "HALF DUPLEX " }
          ]
        },
        {
          title: "RF MODULATION",
          items: [
            { text: "AFSK/FM " }
          ]
        },
        {
          title: "RF PACKET FORMAT",
          items: [
            { text: "AX.25 " },
          ]
        },
        {
          title: "POWER SUPPLY",
          items: [
            { text: "5.0 VDC & 3.3V DC " }
          ]
        },
        {
          title: "INTERFACING",
          items: [
            { text: "CDH HK INTERFACE 9600BPS INDEPENDENT TTL UARTS FOR VHF,UHF AND HOUSE KEEPING, CDH DATA INTERFACE 9600BPS TTL UART, HALF DUPLEX MODE " },
          ]
        }
      ]
    },
  },
  {
    id: "ssproduct6",
    title: "Solar Panels",
    bannerImage: "/assets/sps.png",
    description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    image: "/assets/solar-panels.png",
    alt: "solarpanels3",
    width: 553,
    height: 419,
    items: [
      { text: "POWER ", highlight: "6W PER PANEL (CUSTOMIZABLE AS PER SPACECRAFT)" },
      { text: "OPERATING TEMPERATURE ", highlight: "-30°C to 85°C" },
      { text: "SOLAR CELLS ", highlight: "AZURESPACE, OCE, ET SPACE POWER" },
      { text: "DIMENSIONS ", highlight: "40mm x 80mm x 0.1mm" }
    ],
    innerPage: {
      bannerImage: {
        src: "/assets/solar-panels.png",
        alt: "solarpanels-inner-page",
        width: 1200,
        height: 400
      },
      bannerTitle: "Solar Panels",
      tag: "Specifications",
      // description: "These Solar Panels provide efficient energy harvesting for CubeSats, with customizable power output and high-quality solar cells for reliable performance in space.",
      specifications: [
        {
          title: "POWER",
          items: [
            { text: "6W PER PANEL (CUSTOMIZABLE AS PER SPACECRAFT)" }
          ]
        },
        {
          title: "SOLAR CELLS",
          items: [
            { text: "AZURESPACE, OCE, ET SPACE POWER" },
          ]
        },
        {
          title: "TYPES",
          items: [
            { text: "BODY MOUNTED" },
          ]
        },
        {
          title: "PLATFORMS",
          items: [
            { text: "3U" }
          ]
        },
        {
          title: "OPERATING TEMPERATURE",
          items: [
            { text: "-30°C to 85°C" },
          ]
        },
        {
          title: "ADDITIONAL FEATURES",
          items: [
            { text: "TEMPERATURE MEASUREMENT" }
          ]
        },
        {
          title: "BASE MATERIAL",
          items: [
            { text: "GaInP/GaAs/Ge ON Ge SUBSTRATE" },
          ]
        },
        {
          title: "DIMENSIONS",
          items: [
            { text: "40mm x 80mm x 0.1mm" }
          ]
        },
        {
          title: "CELL AREA",
          items: [
            { text: <>30.18 cm<sup>2</sup></> }
          ]
        },
        {
          title: "AVERAGE EFFICIENCY",
          items: [
            { text: "29.5% (BOL), 26.5%(EOL)" },
          ]
        },
        {
          title: "BYPASS DIODE",
          items: [
            { text: "YES" }
          ]
        },
        {
          title: "VOLTAGE AT MAXIMUM POWER",
          items: [
            { text: "2.411V (BOL), 2.246V (EOL)" },
          ]
        },
        {
          title: "CURRENT AT MAXIMUM POWER",
          items: [
            { text: "0.5044A (BOL), 0.4866A (EOL)" },
          ]
        }
      ]
    },
  }
];