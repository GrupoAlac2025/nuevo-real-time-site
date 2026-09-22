window.ALAD_CONFIG = {
  "stageWidth": 768,
  "stageHeight": 384,
  "fitMode": "cover",
  "bgColor": "#000000",
  "transition": 0.8,
  "backgroundFade": true,
  "clockTimezone": "America/Lima",
  "projectId": "p_mud37zqcgr0ymo",
  "backgrounds": [
    {
      "id": "b_mud38obbj425iz",
      "type": "image",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mud37zqcgr0ymo/1790107027713_atl_feria_de_carreras_usil_oct111.png",
      "duration": 8,
      "breakpoints": null,
      "condition": null
    }
  ],
  "resources": [
    {
      "id": "r_mud38smjscovde",
      "type": "countdown",
      "target": "2026-10-03T04:59:00.000Z",
      "tokenPrefix": "cuenta-regresiva-1"
    }
  ],
  "weather": {
    "enabled": false,
    "lat": -12.0464,
    "lon": -77.0428,
    "city": "Lima",
    "unit": "celsius",
    "refresh": 15
  },
  "apiRefreshMin": 1,
  "breakpoints": [],
  "elements": [
    {
      "id": "e_mud3b1f8dzs4zs",
      "resourceId": "r_mud38smjscovde",
      "type": "countdown",
      "enabled": true,
      "x": 52.9,
      "y": 40.3,
      "width": 23,
      "height": 41.9,
      "align": "center",
      "zIndex": 2,
      "fontSize": 132,
      "fontWeight": "700",
      "color": "#ffffff",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "TuskerGrotesk-6700Bold",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {},
      "countdownTarget": "2026-10-22T19:51:34.388Z",
      "countdownLabels": false,
      "padZero": true,
      "countdownShowDays": true,
      "countdownShowHours": false,
      "countdownShowMinutes": false,
      "countdownShowSeconds": false
    },
    {
      "id": "e_mud3d8hnb7dx99",
      "resourceId": "",
      "type": "text",
      "enabled": true,
      "x": 52.4,
      "y": 22.7,
      "width": 46.9,
      "height": 15,
      "align": "center",
      "zIndex": 2,
      "fontSize": 45,
      "fontWeight": "700",
      "color": "#ffd100",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {},
      "text": "Faltan"
    },
    {
      "id": "e_mud3dibvot8e2i",
      "resourceId": "",
      "type": "text",
      "enabled": true,
      "x": 69.7,
      "y": 52.4,
      "width": 28.9,
      "height": 27.4,
      "align": "center",
      "zIndex": 2,
      "fontSize": 82,
      "fontWeight": "700",
      "color": "#ffffff",
      "background": "transparent",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "TuskerGrotesk-6500Medium",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {},
      "text": "días"
    }
  ]
};
