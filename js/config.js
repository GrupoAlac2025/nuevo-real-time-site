window.ALAD_CONFIG = {
  "stageWidth": 3776,
  "stageHeight": 1056,
  "fitMode": "cover",
  "bgColor": "#000000",
  "transition": 0.8,
  "backgroundFade": false,
  "clockTimezone": "America/Lima",
  "projectId": "p_mv8etknsnbf46m",
  "backgrounds": [
    {
      "id": "b_mv8ko6c58k1mfj",
      "type": "video",
      "src": "https://storage.googleapis.com/media_files_contents_qa/realtime/p_mv8etknsnbf46m/1792010854375_d1553_plantilla_promperu.mp4",
      "duration": 7,
      "breakpoints": [
        "__base__"
      ],
      "condition": null
    }
  ],
  "resources": [],
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
      "id": "e_mv8eyhuzlmv61u",
      "resourceId": "",
      "type": "countdown",
      "enabled": true,
      "x": 21.2,
      "y": 26.2,
      "width": 21.8,
      "height": 39.4,
      "align": "center",
      "zIndex": 2,
      "fontSize": 300,
      "fontWeight": "700",
      "color": "#ffffff",
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
      "overrides": {
        "bp_mv8fezem53uelo": {
          "x": 26.6,
          "y": 21.6
        }
      },
      "countdownTarget": "2026-10-30T05:00:00.000Z",
      "countdownLabels": false,
      "padZero": false,
      "countdownShowDays": true,
      "countdownShowHours": false,
      "countdownShowMinutes": false,
      "countdownShowSeconds": false
    },
    {
      "id": "e_mv8f8rrgtp59od",
      "resourceId": "",
      "type": "text",
      "enabled": true,
      "x": 26.5,
      "y": 57.5,
      "width": 12.2,
      "height": 16,
      "align": "center",
      "zIndex": 2,
      "fontSize": 100,
      "fontWeight": "700",
      "color": "#ffffff",
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
      "text": "días"
    }
  ]
};
