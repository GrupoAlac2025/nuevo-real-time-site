window.ALAD_CONFIG = {
  "stageWidth": 768,
  "stageHeight": 384,
  "fitMode": "cover",
  "bgColor": "#000000",
  "transition": 0.8,
  "backgroundFade": true,
  "clockTimezone": "America/Lima",
  "projectId": "p_mu5zx5j9jlnb79",
  "backgrounds": [
    {
      "id": "b_mu601znl2jcn35",
      "type": "image",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mu5zx5j9jlnb79/1789678432232_laptoprenzodesarrollonegocios1.jpeg",
      "duration": 8,
      "breakpoints": null,
      "condition": null
    }
  ],
  "resources": [
    {
      "id": "r_mu5zzwmvxlkm39",
      "type": "countdown",
      "target": "2026-10-17T20:44:32.887Z",
      "tokenPrefix": "cuenta-regresiva-1"
    },
    {
      "id": "r_mu6002udyusafi",
      "type": "weather",
      "lat": -16.39899,
      "lon": -71.53747,
      "city": "Arequipa, Departamento de Arequipa",
      "unit": "celsius",
      "tokenPrefix": "clima-lima"
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
  "breakpoints": [
    {
      "id": "bp_mu5zy4iad4ngcr",
      "maxWidth": 768,
      "width": 768,
      "height": 320
    }
  ],
  "elements": [
    {
      "id": "e_mu603gdxkplw2d",
      "resourceId": "",
      "type": "text",
      "enabled": true,
      "x": 10,
      "y": 10,
      "width": 80,
      "height": null,
      "align": "center",
      "zIndex": 2,
      "fontSize": 32,
      "fontWeight": "700",
      "color": "#ffffff",
      "background": "rgba(0, 0, 0, 0.45)",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {
        "bp_mu5zy4iad4ngcr": {
          "x": 0.8,
          "y": 7.8,
          "width": 65.7,
          "height": 27.4
        }
      },
      "text": "prueba"
    },
    {
      "id": "e_mu603zoguhyv2y",
      "resourceId": "",
      "type": "clock",
      "enabled": true,
      "x": 10,
      "y": 10,
      "width": 80,
      "height": null,
      "align": "center",
      "zIndex": 2,
      "fontSize": 48,
      "fontWeight": "700",
      "color": "#ffffff",
      "background": "rgba(0, 0, 0, 0.45)",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {
        "bp_mu5zy4iad4ngcr": {
          "x": 2.4,
          "y": 67.2
        }
      },
      "clockShowHours": true,
      "clockShowMinutes": true,
      "clockShowSeconds": false,
      "clock12": false,
      "showDate": false,
      "padZero": true,
      "clockShowAmPm": true
    },
    {
      "id": "e_mu6043yb90i3cs",
      "resourceId": "",
      "type": "ampm",
      "enabled": true,
      "x": 10,
      "y": 4,
      "width": 14,
      "height": null,
      "align": "center",
      "zIndex": 2,
      "fontSize": 24,
      "fontWeight": "700",
      "color": "#ffffff",
      "background": "rgba(0, 0, 0, 0.45)",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {
        "bp_mu5zy4iad4ngcr": {
          "x": 60.3,
          "y": 67.5
        }
      },
      "ampmUppercase": true
    },
    {
      "id": "e_mu6048ay5fdybd",
      "resourceId": "r_mu5zzwmvxlkm39",
      "type": "countdown",
      "enabled": true,
      "x": 10,
      "y": 10,
      "width": 80,
      "height": null,
      "align": "center",
      "zIndex": 2,
      "fontSize": 40,
      "fontWeight": "700",
      "color": "#ffffff",
      "background": "rgba(0, 0, 0, 0.45)",
      "padding": "10px 24px",
      "radius": "10px",
      "letterSpacing": 0,
      "lineHeight": 1.2,
      "fontFamilyKey": "Verdana",
      "fitText": false,
      "condition": {
        "type": "always"
      },
      "overrides": {
        "bp_mu5zy4iad4ngcr": {
          "x": 0,
          "y": 38.1
        }
      },
      "countdownTarget": "2026-10-17T20:47:54.634Z",
      "countdownLabels": true,
      "padZero": true,
      "countdownShowDays": false,
      "countdownShowHours": false,
      "countdownShowMinutes": false,
      "countdownShowSeconds": true
    }
  ]
};
