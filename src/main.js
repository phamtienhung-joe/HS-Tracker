const rawProjects = [{"name":"2026-RH-SOLIS EMERALD BAY RESORT","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":26,"pic":"T. Robinson","sw":"2026/W22 - 2026/W34","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"BS","total_val":2584301.91,"monthly":{"2026/M05":161508.09,"2026/M06":1057923.83,"2026/M07":1021107.61,"2026/M08":343762.38}},{"name":"2026-RH-SOLIS EMERALD BAY RESORT-PHASE 2","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":27,"pic":"B. Davis","sw":"2027/W16 - 2027/W26","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"BS","total_val":2812903.09,"monthly":{"2027/M04":958000.0,"2027/M05":958000.0,"2027/M06":896903.09}},{"name":"2025-RH-FOX COVE LUXURY LODGE","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":26,"pic":"T. White","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"CA","total_val":109171.55,"monthly":{"2026/M04":32449.63,"2026/M01":76721.92}},{"name":"2025-RH-RH CASSIA RESIDENCES","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":50,"pic":"T. Robinson","sw":"2026/W30 - 2026/W36","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":1280767.2,"monthly":{"2026/M07":297278.35,"2026/M08":838320.81,"2026/M09":145168.04}},{"name":"2025-RH-AVENUE BOUTIQUE HOTEL","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":9,"pic":"D. Nguyen","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":48709.5,"monthly":{"2026/M04":48709.5}},{"name":"2025-RH-LAKESIDE PENDRY HOTEL","status":"REMOVED","customer":"RH","type":"RH","stage":"NPI","sku":2,"pic":"D. Nguyen","sw":"2026/W14 - 2026/W14","drawing":"In Progress","veneer":"TBC","metal":"TBC","market":"US","total_val":131498.14,"monthly":{"2026/M10":131498.14}},{"name":"2026-RH-VERONA CLIFF GUESTROOMS","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":12,"pic":"D. Nguyen","sw":"2027/W27 - 2027/W28","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":147575.66,"monthly":{"2027/M07":147575.66}},{"name":"2026-RH-HA STUDIO PICO/WILKINS","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"T. Lewis","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":13589.14,"monthly":{"2026/M06":13589.14}},{"name":"2026-RH-HA STUDIO PICO/WILKINS-REODER","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"D. Miller","sw":"2026/W47 - 2026/W47","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":3678.51,"monthly":{"2026/M11":3678.51}},{"name":"2026-RH-NAMA LISBON","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":11,"pic":"D. Miller","sw":"2026/W37 - 2026/W37","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"PT","total_val":66874.4,"monthly":{"2026/M09":66874.4}},{"name":"2026-RH-NAMA LISBON","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":11,"pic":"D. Miller","sw":"2026/W44 - 2026/W44","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"PT","total_val":114072.23,"monthly":{"2026/M10":114072.23}},{"name":"2026-RH-NAMA LISBON-PUBLIC SPACE","status":"NOR","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"D. Miller","sw":"2027/W04 - 2027/W04","drawing":"In Progress","veneer":"Approved","metal":"TBC","market":"PT","total_val":2076.26,"monthly":{"2027/M01":2076.26}},{"name":"2026-RH-RANCHO VALENCIA","status":"PIPELINE","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"T. Robinson","sw":"TBC - TBC","drawing":"Pending Approval","veneer":"Approved","metal":"TBC","market":"US","total_val":15754.2,"monthly":{}},{"name":"2026-RH-RH CONTRACT (LARA CHAIR 25)","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"T. Jackson","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":3838.8,"monthly":{"2026/M03":3838.8}},{"name":"2025-RH-RH MANHATTAN SUITES","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPD","sku":1,"pic":"D. Taylor","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":1247.21,"monthly":{"2026/M06":1247.21}},{"name":"2024-RH-TRUMP DORAL","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"T. White","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":1291.59,"monthly":{"2026/M07":1291.59}},{"name":"2026-RH-RH MANHATTAN SUITES","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":24,"pic":"TBD","sw":"2027/W19 - 2027/W26","drawing":"Pending Approval","veneer":"Approved","metal":"Approved","market":"US","total_val":1137703.3,"monthly":{"2027/M05":568852.44,"2027/M06":568850.86}},{"name":"2026-RH-NAPA VALLEY VINES RETREAT","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPD","sku":6,"pic":"B. Davis","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":964.06,"monthly":{"2026/M06":964.06}},{"name":"2025-RH-NAPA VALLEY VINES RETREAT","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":38,"pic":"B. Davis","sw":"2026/W45 - 2026/W50","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":350096.5,"monthly":{"2026/M11":268661.85,"2026/M12":81434.65}},{"name":"2026-RH-SNAKE RIVER LODGE BLUEFLAG","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":12,"pic":"D. Miller","sw":"2026/W32 - 2026/W35","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":230493.54,"monthly":{"2026/M08":230493.54}},{"name":"2026-RH-SNAKE RIVER LODGE BLUEFLAG","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"D. Miller","sw":"2027/W05 - 2027/W05","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":3489.64,"monthly":{"2027/M01":3489.64}},{"name":"2025-RH-TRUMP LAS VEGAS PENTHOUSES","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":36,"pic":"B. Davis","sw":"2027/W02 - 2027/W05","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":572762.82,"monthly":{"2027/M01":572762.82}},{"name":"2026-RH-RITZ DOVE MOUNTAIN","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":14,"pic":"D. Miller","sw":"2027/W15 - 2027/W17","drawing":"Pending Approval","veneer":"Pending Approval","metal":"Pending Approval","market":"US","total_val":205265.74,"monthly":{"2027/M04":205265.74}},{"name":"2026-RH-MAYBOURNE_ONE WALL STREET NY","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"T. Lewis","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":1800.74,"monthly":{"2026/M04":1800.74}},{"name":"2024-RH-ST. REGIS KANAI","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":18,"pic":"T. Robinson","sw":"2026/W31 - 2026/W32","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"MX","total_val":169742.21,"monthly":{"2026/M07":114167.74,"2026/M08":55574.47}},{"name":"2026-RH-VERONA CLIFF GUESTROOMS","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPD","sku":12,"pic":"D. Nguyen","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":12336.06,"monthly":{"2026/M06":12336.06}},{"name":"2026-COSMIC REALTY-250 FIFTH AVENUE HOTEL","status":"SHIPPED","customer":"CRESTVIEW REALTY","type":"NON RH","stage":"NPI","sku":17,"pic":"T. Jackson","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":55528.48,"monthly":{"2026/M04":1998.51,"2026/M02":53529.97}},{"name":"2026-L&S-ELYSEE PALACE SUITES","status":"SHIPPED","customer":"L&M","type":"NON RH","stage":"NPI","sku":22,"pic":"T. Harris","sw":"2026/W32 - 2026/W37","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":171058.27,"monthly":{"2026/M08":88798.2,"2026/M09":82260.07}},{"name":"2026-L&S-FAENA TULLUM (FTMX)","status":"FC","customer":"L&M","type":"NON RH","stage":"NPI","sku":16,"pic":"TBD","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"TBC","market":"MX","total_val":1296635.94,"monthly":{"2027/M10":1296635.94}},{"name":"2025-FLEETWOOD -FOUR SEASON JACKSONVILLE","status":"SHIPPED","customer":"FOXWOOD","type":"NON RH","stage":"NPI","sku":25,"pic":"T. Lewis","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":220992.67,"monthly":{"2026/M04":63330.89,"2026/M05":97304.04,"2026/M06":60357.74}},{"name":"2026-FLEETWOOD -METROPOLIS TOWER SUITES","status":"DROPPED","customer":"FOXWOOD","type":"NON RH","stage":"NPI","sku":94,"pic":"T. Harris","sw":"TBC - TBC","drawing":"In Progress","veneer":"Approved","metal":"Pending Approval","market":"US","total_val":2900146.02,"monthly":{"2027/M01":966715.34,"2027/M02":450500.0,"2027/M03":966715.34,"2027/M04":516215.34}},{"name":"2025-FLEETWOOD -HWVP PHASE 2","status":"SHIPPED","customer":"FOXWOOD","type":"NON RH","stage":"NPI","sku":7,"pic":"D. Nguyen","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":7990.65,"monthly":{"2026/M04":7990.65}},{"name":"2026-THE PARKER-JAMES NY NOMAD","status":"CANCELLED","customer":"THE PEMBROKE","type":"NON RH","stage":"NPI","sku":1,"pic":"S. Clark","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":3620.46,"monthly":{"2026/M05":3620.46}},{"name":"2025-KD-KNOX DALLAS","status":"SHIPPED","customer":"KENT DESIGN","type":"NON RH","stage":"NPI","sku":30,"pic":"D. Taylor","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":188497.88,"monthly":{"2026/M03":22919.58,"2026/M04":68758.85,"2026/M09":96819.45}},{"name":"2026-KD-KNOX DALLAS SUITE","status":"SHIPPED","customer":"KENT DESIGN","type":"NON RH","stage":"NPI","sku":50,"pic":"P. Wilson","sw":"2026/W39 - 2026/W52","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":104857.57,"monthly":{"2026/M10":104857.57}},{"name":"2025-KD-KNOX DALLAS SUITE","status":"OB","customer":"KENT DESIGN","type":"NON RH","stage":"NPI","sku":50,"pic":"P. Wilson","sw":"2026/W39 - 2026/W52","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":209302.71,"monthly":{"2026/M11":149274.32,"2026/M12":60028.39}},{"name":"2026-KD-KNOX DALLAS INSPECTION COVERS","status":"OB","customer":"KENT DESIGN","type":"NON RH","stage":"NPI","sku":3,"pic":"P. Wilson","sw":"2026/W52 - 2026/W52","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":2781.84,"monthly":{"2026/M12":2781.84}},{"name":"2026-AHMADIAH-MARRIOTT KHOBAR","status":"REMOVED","customer":"ALHAMBRA","type":"NON RH","stage":"NPI","sku":35,"pic":"T. Jackson","sw":"TBC - TBC","drawing":"TBC","veneer":"TBC","metal":"TBC","market":"SA","total_val":0.0,"monthly":{}},{"name":"2025-MOHI-MOHI APPELLATION","status":"SHIPPED","customer":"MONTEREY","type":"NON RH","stage":"NPI","sku":28,"pic":"T. White","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":337024.05,"monthly":{"2026/M05":168039.61,"2026/M06":168984.44}},{"name":"2026-MOHI-MOHI APPELLATION","status":"SHIPPED","customer":"MONTEREY","type":"NON RH","stage":"NPI","sku":13,"pic":"D. Miller","sw":"2026/W39 - 2026/W41","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":99541.3,"monthly":{"2026/M10":99541.3}},{"name":"2025-L&S-RITZ CARLTON COTTON BAY","status":"PIPELINE","customer":"L&M","type":"NON RH","stage":"NPI","sku":117,"pic":"TBD","sw":"2027/W40 - 2027/W52","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"BS","total_val":3271896.0,"monthly":{"2027/M10":1090632.0,"2027/M11":1090632.0,"2027/M12":1090632.0}},{"name":"2025-PLUS CORPORATION-SOHO HOUSE TOKYO","status":"SHIPPED","customer":"PALLADIUM CORP","type":"NON RH","stage":"NPI","sku":48,"pic":"T. Harris","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"JP","total_val":26173.08,"monthly":{"2026/M03":23264.96,"2026/M05":2908.12}},{"name":"2026-SPECTRUM-1122 MADISON","status":"SHIPPED","customer":"STRATA","type":"NON RH","stage":"NPI","sku":20,"pic":"T. Harris","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":87108.84,"monthly":{"2026/M07":87108.84}},{"name":"2026-TRIMA-JRH","status":"SHIPPED","customer":"TERRA DESIGN","type":"NON RH","stage":"NPI","sku":4,"pic":"D. Taylor","sw":"2026/W29 - 2026/W36","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"JM","total_val":935920.85,"monthly":{"2026/M07":474731.26,"2026/M08":426645.48,"2026/M09":34544.11}},{"name":"2026-BROOKFIELD-PACIFIC HEIGHTS HOTEL","status":"SHIPPED","customer":"BRIGHTON","type":"NON RH","stage":"NPD","sku":9,"pic":"D. Nguyen","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"In Progress","market":"CA","total_val":15382.31,"monthly":{"2026/M05":15382.31}},{"name":"2026-BROOKFIELD-PACIFIC HEIGHTS HOTEL","status":"DROPPED","customer":"BRIGHTON","type":"NON RH","stage":"NPI","sku":9,"pic":"D. Nguyen","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"CA","total_val":852774.74,"monthly":{"2027/M05":426387.37,"2027/M06":426387.37}},{"name":"2025-FLEETWOOD -METROPOLIS CASINO RESORT","status":"SHIPPED","customer":"FOXWOOD","type":"NON RH","stage":"NPD","sku":12,"pic":"N. Martinez","sw":"2026/W14 - 2026/W14","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":13606.73,"monthly":{"2026/M03":13606.73,"2026/M09":0.0}},{"name":"2025-FLEETWOOD -METROPOLIS CASINO RESORT","status":"FC","customer":"FOXWOOD","type":"NON RH","stage":"NPI","sku":12,"pic":"B. Davis","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"TBC","market":"US","total_val":3088568.64,"monthly":{"2027/M05":1029522.88,"2027/M06":1029522.88,"2027/M07":1029522.88}},{"name":"2026-L&S-CARIBBEAN SHORES RESORT","status":"ON HOLD","customer":"L&M","type":"NON RH","stage":"NPD","sku":16,"pic":"T. Harris","sw":"2026/W42 - 2026/W44","drawing":"In Progress","veneer":"Pending Approval","metal":"Pending Approval","market":"US","total_val":1657275.44,"monthly":{"2026/M09":7275.44,"2027/M09":825000.0,"2027/M10":825000.0}},{"name":"2026-SPECTRUM-OCEAN TERRACE VANITIES","status":"SHIPPED","customer":"STRATA","type":"NON RH","stage":"NPD","sku":4,"pic":"D. Nguyen","sw":"2026/W37 - 2026/W40","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":3289.37,"monthly":{"2026/M08":3289.37}},{"name":"2026-SPECTRUM-OCEAN TERRACE VANITIES","status":"FC","customer":"STRATA","type":"NON RH","stage":"NPI","sku":4,"pic":"D. Nguyen","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"US","total_val":180680.91,"monthly":{"2027/M03":180680.91}},{"name":"2026-AYALA-CANOPY METROPOLITAN HOTEL","status":"SHIPPED","customer":"AVALON","type":"NON RH","stage":"NPD","sku":9,"pic":"B. Davis","sw":"2026/W35 - 2026/W35","drawing":"In Progress","veneer":"In Progress","metal":"Pending Approval","market":"SA","total_val":9062.72,"monthly":{"2026/M08":9062.72}},{"name":"2026-BENJAMIN-HACIENDA CASCAIS RESORT","status":"OB","customer":"BELMONT","type":"NON RH","stage":"NPD","sku":21,"pic":"B. Davis","sw":"2026/W46 - 2026/W51","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"PT","total_val":32000.0,"monthly":{"2026/M12":32000.0}},{"name":"2026-BENJAMIN-HACIENDA CASCAIS RESORT","status":"FC","customer":"BELMONT","type":"NON RH","stage":"NPI","sku":122,"pic":"B. Davis","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"TBC","market":"PT","total_val":596794.0,"monthly":{"2027/M06":596794.0}},{"name":"2026-WOODHAUS-KNOX HENDERSON","status":"SHIPPED","customer":"WEYBRIDGE","type":"NON RH","stage":"NPI","sku":12,"pic":"D. Miller","sw":"2026/W32 - 2026/W32","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":24195.82,"monthly":{"2026/M08":24195.82}},{"name":"2026-TRIMA-JOIA TIERRA DEL SOL","status":"PIPELINE","customer":"TERRA DESIGN","type":"NON RH","stage":"NPI","sku":0,"pic":"T. Harris","sw":"TBC - TBC","drawing":"Not Started","veneer":"TBC","metal":"TBC","market":"AR","total_val":2399445.68,"monthly":{"2027/M07":1199722.84,"2027/M08":1199722.84}},{"name":"2026-RH-RED SEA","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":0,"pic":"TBD","sw":"2027/W37 - 2027/W39","drawing":"Not Started","veneer":"TBC","metal":"TBC","market":"SA","total_val":901000.0,"monthly":{"2027/M09":901000.0}},{"name":"2026-RH-VICEROY SUGAR BEACH - ASH WOOD VERSION","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":18,"pic":"B. Davis","sw":"2026/W39 - 2026/W39","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"LC","total_val":145154.25,"monthly":{"2026/M09":145154.25}},{"name":"TBC-L&S-SILVERSANDS GRAND ANSE","status":"REJECTED","customer":"L&M","type":"NON RH","stage":"NPI","sku":55,"pic":"T. Harris","sw":"TBC - TBC","drawing":"TBC","veneer":"TBC","metal":"TBC","market":"Grenada (Caribbean)","total_val":371262.0,"monthly":{}},{"name":"2026-SPECTRUM-METRO 550 TOWER APARTMENTS","status":"SHIPPED","customer":"STRATA","type":"NON RH","stage":"NPD","sku":4,"pic":"D. Nguyen","sw":"2026/W37 - 2026/W40","drawing":"Approved","veneer":"Approved","metal":"In Progress","market":"US","total_val":6924.7,"monthly":{"2026/M08":6924.7}},{"name":"2026-SPECTRUM-METRO 550 TOWER APARTMENTS","status":"FC","customer":"STRATA","type":"NON RH","stage":"NPI","sku":30,"pic":"D. Nguyen","sw":"TBC - TBC","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":360306.71,"monthly":{"2027/M04":360306.71}},{"name":"2026-FLEETWOOD -AUBERGE RIVER OAKS MR","status":"CANCELLED","customer":"FOXWOOD","type":"NON RH","stage":"NPD","sku":4,"pic":"D. Nguyen","sw":"ON HOLD - ON HOLD","drawing":"Pending Approval","veneer":"Approved","metal":"In Progress","market":"US","total_val":15957.64,"monthly":{"2026/M09":15957.64}},{"name":"2026-RH-MOUNTAIN CREST TOPNOTCH","status":"ON HOLD","customer":"RH","type":"RH","stage":"NPD","sku":17,"pic":"D. Miller","sw":"2026/W50 - 2026/W52","drawing":"Pending Approval","veneer":"Pending Approval","metal":"Pending Approval","market":"US","total_val":565084.29,"monthly":{"2026/M12":31312.76,"2027/M05":533771.53}},{"name":"2026-FLEETWOOD -SPANISH BAY CLUB","status":"OB","customer":"FOXWOOD","type":"NON RH","stage":"NPI","sku":15,"pic":"T. Harris","sw":"2026/W45 - 2026/W48","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":60009.22,"monthly":{"2026/M11":60009.22}},{"name":"2026-FLEETWOOD -HWVP PHASE 2","status":"SHIPPED","customer":"FOXWOOD","type":"NON RH","stage":"NPI","sku":7,"pic":"Operations","sw":"TBC - TBC","drawing":"Approved","veneer":"TBC","metal":"TBC","market":"US","total_val":1492.13,"monthly":{"2026/M01":1492.13}},{"name":"2026-KD-KNOX DALLAS","status":"SHIPPED","customer":"KENT DESIGN","type":"NON RH","stage":"NPI","sku":30,"pic":"Operations","sw":"TBC - TBC","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":443386.65,"monthly":{"2026/M01":405978.65,"2026/M02":37408.0}},{"name":"2026-PLUS CORPORATION-SOHO HOUSE TOKYO","status":"SHIPPED","customer":"PALLADIUM CORP","type":"NON RH","stage":"NPI","sku":48,"pic":"Operations","sw":"TBC - TBC","drawing":"Approved","veneer":"TBC","metal":"TBC","market":"Japan","total_val":107130.47,"monthly":{"2026/M01":24919.55,"2026/M02":82210.92}},{"name":"2026-RH-RH BRANDYWINE","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":2,"pic":"Operations","sw":"TBC - TBC","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":5986.28,"monthly":{"2026/M01":5986.28}},{"name":"2026-BROOKFIELD-ROYAL CARLTON TOWERS","status":"SHIPPED","customer":"BRIGHTON","type":"NON RH","stage":"NPD","sku":6,"pic":"D. Nguyen","sw":"2026/W29 - 2026/W29","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":15091.52,"monthly":{"2026/M07":15091.52}},{"name":"2026-RH-BESPOKE MIYU CONSOLE TABLES","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPD","sku":5,"pic":"B. Davis","sw":"2026/W29 - 2026/W29","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":5634.45,"monthly":{"2026/M07":5634.45}},{"name":"2026-RH-MILE HIGH TOWER SUITES","status":"OB","customer":"RH","type":"RH","stage":"NPD","sku":2,"pic":"D. Miller","sw":"2026/W44 - 2026/W44","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":5908.11,"monthly":{"2026/M10":5908.11}},{"name":"2026-RH-COMPETITIVE EDGE","status":"PIPELINE","customer":"RH","type":"RH","stage":"NPI","sku":3,"pic":"TBD","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"TBC","market":"US","total_val":932460.1,"monthly":{}},{"name":"2026-FLEETWOOD -WALDORF ASTORIA DEER VALLEY","status":"PIPELINE","customer":"FOXWOOD","type":"NON RH","stage":"NPI","sku":13,"pic":"T. Harris","sw":"TBC - TBC","drawing":"TBC","veneer":"TBC","metal":"TBC","market":"US","total_val":6311793.65,"monthly":{"2027/M06":1262358.73,"2027/M07":1262358.73,"2027/M08":1262358.73,"2027/M09":1262358.73,"2027/M10":1262358.73}},{"name":"2026-FLEETWOOD -PEBBLE BEACH CASA PALMERO","status":"SHIPPED","customer":"FOXWOOD","type":"NON RH","stage":"NPI","sku":2,"pic":"T. Harris","sw":"2026/W41 - 2026/W41","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":14313.1,"monthly":{"2026/M10":14313.1}},{"name":"2026-RH-SUNPEAKS ALPINE RESORT","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPD","sku":1,"pic":"B. Davis","sw":"2026/W27 - 2026/W27","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":1118.03,"monthly":{"2026/M06":1118.03}},{"name":"2026-RH-SUNPEAKS ALPINE RESORT","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":8,"pic":"P. Wilson","sw":"2027/W13 - 2027/W14","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":41236.68,"monthly":{"2027/M04":41236.68}},{"name":"2026-BROOKFIELD-ROYAL CARLTON TOWERS","status":"DROPPED","customer":"BRIGHTON","type":"NON RH","stage":"NPI","sku":11,"pic":"D. Nguyen","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"US","total_val":2205335.0,"monthly":{"2027/M01":444400.0,"2027/M03":880467.5,"2027/M04":880467.5}},{"name":"2026-AYALA-CANOPY METROPOLITAN HOTEL","status":"FC","customer":"AVALON","type":"NON RH","stage":"NPI","sku":9,"pic":"B. Davis","sw":"2027/W10 - 2027/W13","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"SA","total_val":1029813.3,"monthly":{"2027/M04":1029813.3}},{"name":"2026-TRIMA-ASIATICO RESTAURANT","status":"SHIPPED","customer":"TERRA DESIGN","type":"NON RH","stage":"NPI","sku":32,"pic":"T. Robinson","sw":"2026/W35 - 2026/W40","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"JM","total_val":163208.92,"monthly":{"2026/M08":44801.0,"2026/M09":118407.92}},{"name":"2026-RH-HAMPTONS MARINA CLUB","status":"CANCELLED","customer":"RH","type":"RH","stage":"NPD","sku":5,"pic":"B. Davis","sw":"2026/W33 - 2026/W33","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"US","total_val":1056812.0,"monthly":{"2026/M08":11812.0,"2027/M06":1045000.0}},{"name":"2026-HBA-HILTON PASADENA","status":"OB","customer":"H&A DESIGN","type":"NON RH","stage":"NPI","sku":5,"pic":"D. Nguyen","sw":"2026/W45 - 2026/W45","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":23439.85,"monthly":{"2026/M11":23439.85}},{"name":"2026-FLEETWOOD -FAIRMONT HOTEL WINNIPEG","status":"REMOVED","customer":"FOXWOOD","type":"NON RH","stage":"NPI","sku":32,"pic":"T. Harris","sw":"TBC - TBC","drawing":"TBC","veneer":"TBC","metal":"TBC","market":"CA","total_val":72247.56,"monthly":{}},{"name":"2026-L&S-THE STANDARD MIAMI HOTEL","status":"OB","customer":"L&M","type":"NON RH","stage":"NPI","sku":24,"pic":"D. Nguyen","sw":"2026/W46 - 2026/W49","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":45864.36,"monthly":{"2026/M11":45864.36}},{"name":"2026-RH-KINDERED KEYSTONE RESORT","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"D. Miller","sw":"2026/W36 - 2026/W36","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":1162.18,"monthly":{"2026/M08":1162.18}},{"name":"2026-HBA-MARRIOTT GUYANA PUBLIC AREAS","status":"ON HOLD","customer":"H&A DESIGN","type":"NON RH","stage":"NPI","sku":3,"pic":"D. Miller","sw":"2026/W42 - 2026/W42","drawing":"Pending Approval","veneer":"Pending Approval","metal":"TBC","market":"GY","total_val":24928.05,"monthly":{"2026/M10":24928.05}},{"name":"2026-RH-BELGROVE VILLAS","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"T. Martin","sw":"2026/W39 - 2026/W39","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":14657.41,"monthly":{"2026/M09":14657.41}},{"name":"2026-BISCAYNE-PARK AVENUE LUXURY HOTEL","status":"OB","customer":"BEACON","type":"NON RH","stage":"NPD","sku":3,"pic":"B. Davis","sw":"2026/W43 - 2026/W43","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":2596.21,"monthly":{"2026/M10":2596.21}},{"name":"TBC-BISCAYNE-PARK AVENUE LUXURY HOTEL","status":"PIPELINE","customer":"BEACON","type":"NON RH","stage":"NPI","sku":17,"pic":"B. Davis","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"US","total_val":780055.0,"monthly":{}},{"name":"2026-RH-CAUDWELL","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"B. Davis","sw":"2026/W30 - 2026/W30","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"UK","total_val":557.44,"monthly":{"2026/M07":557.44}},{"name":"2026-RH-FOUR SEASONS  DENVER","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":2,"pic":"D. Miller","sw":"2027/W05 - 2027/W05","drawing":"Pending Approval","veneer":"Pending Approval","metal":"TBC","market":"US","total_val":4339.79,"monthly":{"2027/M01":4339.79}},{"name":"2026-RH-MUNISH","status":"ON HOLD","customer":"RH","type":"RH","stage":"NPD","sku":1,"pic":"D. Miller","sw":"TBC - TBC","drawing":"In Progress","veneer":"In Progress","metal":"TBC","market":"TBC","total_val":0.0,"monthly":{}},{"name":"2026-RH-MAUNA LANI","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":2,"pic":"D. Miller","sw":"2026/W02 - 2026/W02","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":3385.8,"monthly":{"2027/M01":3385.8}},{"name":"2026-RH-GOLDEN PEAK","status":"SHIPPED","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"B. Davis","sw":"2026/W31 - 2026/W31","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"TBC","total_val":1590.61,"monthly":{"2026/M07":1590.61}},{"name":"2026-RH-CUSTOM BEDS FOR EU","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":2,"pic":"D. Miller","sw":"2027/W05 - 2027/W05","drawing":"Pending Approval","veneer":"Pending Approval","metal":"TBC","market":"EU","total_val":9182.69,"monthly":{"2027/M01":9182.69}},{"name":"2026-BWG -HARBOR POINT RESIDENCES","status":"SHIPPED","customer":"BWH CONTRACT","type":"NON RH","stage":"NPD","sku":9,"pic":"D. Taylor","sw":"2026/W38 - 2026/W38","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"AU","total_val":0.0,"monthly":{"2026/M09":0.0}},{"name":"2026-RH-HIGHLAND RIDGE CHALETS","status":"OB","customer":"RH","type":"RH","stage":"NPD","sku":17,"pic":"D. Miller","sw":"2026/W43 - 2026/W43","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":30632.35,"monthly":{"2026/M11":30632.35}},{"name":"2026-RH-HIGHLAND RIDGE CHALETS","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":18,"pic":"D. Miller","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"In Progress","market":"US","total_val":271773.08,"monthly":{"2027/M05":271773.08}},{"name":"2026-RH-TIMBERLINE ALPINE RESORT","status":"OB","customer":"RH","type":"RH","stage":"NPD","sku":15,"pic":"D. Nguyen","sw":"2026/W46 - 2026/W46","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":32417.97,"monthly":{"2026/M11":32417.97}},{"name":"2026-RH-TIMBERLINE ALPINE RESORT","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":12,"pic":"D. Nguyen","sw":"2027/W29 - 2027/W34","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"US","total_val":543548.0,"monthly":{"2027/M07":271774.0,"2027/M08":271774.0}},{"name":"2026-RH-RITZ CABO VILLA","status":"PIPELINE","customer":"RH","type":"RH","stage":"NPI","sku":4,"pic":"T. Martin","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"TBC","market":"Mexico","total_val":10966.46,"monthly":{}},{"name":"2026-FLEETWOOD -BDNY","status":"SHIPPED","customer":"FOXWOOD","type":"NON RH","stage":"NPD","sku":3,"pic":"T. Harris","sw":"2026/W40 - 2026/W40","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":0.0,"monthly":{"2026/M09":0.0}},{"name":"2026-RH-AHS ONE CANAL CRESENT","status":"REMOVED","customer":"RH","type":"RH","stage":"NPI","sku":4,"pic":"B. Davis","sw":"2026/W37 - 2026/W37","drawing":"TBC","veneer":"TBC","metal":"TBC","market":"US","total_val":0.0,"monthly":{"2026/M09":0.0}},{"name":"2026-RH-1419 MONUMENT HOTEL","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"T. Martin","sw":"2026/W49 - 2026/W49","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":6390.44,"monthly":{"2026/M12":6390.44}},{"name":"2026-SH-OAKLEY MANOR CABINETS","status":"OB","customer":"SOLARA","type":"NON RH","stage":"NPD","sku":1,"pic":"P. Wilson","sw":"2026/W47 - 2026/W47","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"UK","total_val":2045.81,"monthly":{"2026/M10":2045.81}},{"name":"2026-SH-OAKLEY MANOR CABINETS","status":"FC","customer":"SOLARA","type":"NON RH","stage":"NPI","sku":4,"pic":"P. Wilson","sw":"2027/W15 - 2027/W16","drawing":"In Progress","veneer":"In Progress","metal":"TBC","market":"UK","total_val":193236.86,"monthly":{"2027/M04":193236.86}},{"name":"2026-AG-8 EATON LANE","status":"OB","customer":"ALTA","type":"NON RH","stage":"NPI","sku":7,"pic":"T. Martin","sw":"2026/W49 - 2026/W49","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"UK","total_val":15350.95,"monthly":{"2026/M12":15350.95}},{"name":"2026-AG-BOARDROOM FURNITURE","status":"OB","customer":"ALTA","type":"NON RH","stage":"NPI","sku":2,"pic":"T. Martin","sw":"2026/W47 - 2026/W47","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"UK","total_val":10576.56,"monthly":{"2026/M11":10576.56}},{"name":"2026-AG-CHARTER STREET TABLES","status":"OB","customer":"ALTA","type":"NON RH","stage":"NPI","sku":5,"pic":"T. Martin","sw":"2026/W47 - 2026/W47","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"UK","total_val":16329.49,"monthly":{"2026/M11":16329.49}},{"name":"2026-RH-DEER VALLEY","status":"PIPELINE","customer":"RH","type":"RH","stage":"NPI","sku":4,"pic":"D. Miller","sw":"TBC - TBC","drawing":"Pending Approval","veneer":"Pending Approval","metal":"Pending Approval","market":"US","total_val":50384.34,"monthly":{"2028/M03":50384.34}},{"name":"2026-RH-ALTERRA_DEER VALLEY","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":0,"pic":"D. Miller","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"In Progress","market":"US","total_val":250100.62,"monthly":{"2027/M06":250100.62}},{"name":"2026-BISCAYNE-SLPS - SUGAR LAND, PUBLIC SPACE","status":"REJECTED","customer":"BEACON","type":"NON RH","stage":"NPI","sku":28,"pic":"H. Anderson","sw":"2027/W01 - 2027/W05","drawing":"In Progress","veneer":"In Progress","metal":"TBC","market":"US","total_val":163579.16,"monthly":{"2027/M01":163579.16}},{"name":"2026-BISCAYNE-SLPSC","status":"OB","customer":"BEACON","type":"NON RH","stage":"NPI","sku":35,"pic":"D. Nguyen","sw":"2027/W01 - 2027/W04","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":87993.44,"monthly":{"2027/M01":87993.44}},{"name":"2026-FLEETWOOD -MGM BELLAGIO","status":"OB","customer":"FOXWOOD","type":"NON RH","stage":"NPI","sku":1,"pic":"T. Martin","sw":"2026/W49 - 2026/W49","drawing":"Approved","veneer":"Approved","metal":"Approved","market":"US","total_val":3038.7,"monthly":{"2026/M12":3038.7}},{"name":"2026-RH-FOUR SEASON DUBROVNIK","status":"ON HOLD","customer":"RH","type":"RH","stage":"NPD","sku":32,"pic":"D. Taylor","sw":"2026/W50 - 2026/W52","drawing":"In Progress","veneer":"TBC","metal":"TBC","market":"EU","total_val":1690531.03,"monthly":{"2026/M12":15681.93,"2027/M11":837424.55,"2027/M12":837424.55}},{"name":"2026-BISCAYNE-DESERT VISTA MODEL ROOM","status":"OB","customer":"BEACON","type":"NON RH","stage":"NPD","sku":15,"pic":"T. Martin","sw":"2027/W03 - 2027/W03","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":16311.38,"monthly":{"2027/M01":16311.38}},{"name":"2026-BISCAYNE-DESERT VISTA MODEL ROOM-EXTRA","status":"REJECTED","customer":"BEACON","type":"NON RH","stage":"NPD","sku":7,"pic":"T. Martin","sw":"2027/W01 - 2027/W02","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":7570.15,"monthly":{"2027/M01":7570.15}},{"name":"2026-BISCAYNE-AGSR - DESERT CANYON SUITES - MODEL ROOM","status":"OB","customer":"BEACON","type":"NON RH","stage":"NPD","sku":16,"pic":"T. Martin","sw":"2027/W03 - 2027/W03","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":12160.9,"monthly":{"2027/M01":12160.9}},{"name":"2026-BISCAYNE-AGSR - DESERT CANYON SUITES - EXTRA","status":"OB","customer":"BEACON","type":"NON RH","stage":"NPD","sku":6,"pic":"T. Martin","sw":"2027/W03 - 2027/W03","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":4479.36,"monthly":{"2027/M01":4479.36}},{"name":"2026-BISCAYNE-AGSR - DESERT CANYON SUITES - MODEL ROOM","status":"FC","customer":"BEACON","type":"NON RH","stage":"NPI","sku":0,"pic":"T. Martin","sw":"TBC - TBC","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"US","total_val":3042000.0,"monthly":{"2027/M05":1014000.0,"2027/M06":1014000.0,"2027/M07":1014000.0}},{"name":"2026-BISCAYNE-SPA","status":"OB","customer":"BEACON","type":"NON RH","stage":"NPD","sku":5,"pic":"T. Martin","sw":"2027/W04 - 2027/W04","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":8928.36,"monthly":{"2027/M01":8928.36}},{"name":"2026-BISCAYNE-OLY PA","status":"NOR","customer":"BEACON","type":"NON RH","stage":"NPI","sku":1,"pic":"T. Martin","sw":"2027/W10 - 2027/W10","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":3041.77,"monthly":{"2027/M03":3041.77}},{"name":"2026-MJM-SIERRA PINE CABINS","status":"CANCELLED","customer":"M&K","type":"NON RH","stage":"NPI","sku":3,"pic":"P. Wilson","sw":"2027/W04 - 2027/W04","drawing":"In Progress","veneer":"TBC","metal":"TBC","market":"US","total_val":350966.0,"monthly":{"2027/M01":175483.0,"2027/M03":175483.0}},{"name":"2026-RH-TRIBECA LOFT RESIDENCES - VANITIES","status":"ON HOLD","customer":"RH","type":"RH","stage":"NPD","sku":2,"pic":"D. Miller","sw":"2026/W50 - 2026/W50","drawing":"In Progress","veneer":"Not Started","metal":"In Progress","market":"US","total_val":5304.28,"monthly":{"2026/M12":5304.28}},{"name":"2026-MV-HORIZON HEALTH WELLNESS CENTER","status":"NOR","customer":"MARINA VISTA","type":"NON RH","stage":"NPI","sku":27,"pic":"D. Nguyen","sw":"2027/W05 - 2027/W05","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":72349.1,"monthly":{"2027/M01":27810.0,"2027/M03":44539.1}},{"name":"2026-MV-HORIZON HEALTH WELLNESS CENTER-PHASE 2","status":"FC","customer":"MARINA VISTA","type":"NON RH","stage":"NPI","sku":29,"pic":"D. Nguyen","sw":"2027/W15 - 2027/W22","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":181760.14,"monthly":{"2027/M05":181760.14}},{"name":"2026-RH-MONTAGE PENDRY BARBADOS","status":"OB","customer":"RH","type":"RH","stage":"NPI","sku":1,"pic":"D. Miller","sw":"2026/W47 - 2026/W47","drawing":"Approved","veneer":"Approved","metal":"TBC","market":"US","total_val":6073.14,"monthly":{"2026/M11":6073.14}},{"name":"2026-SPECTRUM-METRO 550 POCKET DOORS","status":"FC","customer":"STRATA","type":"NON RH","stage":"NPD","sku":1,"pic":"P. Wilson","sw":"2026/W48 - 2026/W48","drawing":"In Progress","veneer":"Approved","metal":"TBC","market":"US","total_val":41499.21,"monthly":{"2026/M11":712.04,"2027/M04":40787.17}},{"name":"2026-RH- FOUR SEASONS LAS VEGAS","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":50,"pic":"P. Wilson","sw":"2027/W24 - 2027/W26","drawing":"In Progress","veneer":"In Progress","metal":"Not Started","market":"US","total_val":404064.37,"monthly":{"2027/M06":404064.37}},{"name":"2026-RH-LAKE OCONEE TENTS","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":7,"pic":"D. Nguyen","sw":"2027/W23 - 2027/W24","drawing":"Not Started","veneer":"Not Started","metal":"Not Started","market":"US","total_val":42011.33,"monthly":{"2027/M06":42011.33}},{"name":"2026-BISCAYNE-MCO","status":"NOR","customer":"BEACON","type":"NON RH","stage":"NPI","sku":2,"pic":"T. Martin","sw":"2027/W10 - 2027/W12","drawing":"In Progress","veneer":"In Progress","metal":"In Progress","market":"US","total_val":361479.41,"monthly":{"2027/M03":361479.41}},{"name":"TBC-FAIRFIELD-MONTAGUE HISTORIC HOTEL","status":"PIPELINE","customer":"FAIRMONT","type":"NON RH","stage":"NPI","sku":3,"pic":"B. Davis","sw":"TBC - TBC","drawing":"In Progress","veneer":"In Progress","metal":"TBC","market":"US","total_val":334329.81,"monthly":{}},{"name":"2026-FAIRFIELD-MONTAGUE HISTORIC HOTEL","status":"FC","customer":"FAIRMONT","type":"NON RH","stage":"NPD","sku":3,"pic":"B. Davis","sw":"TBC - TBC","drawing":"In Progress","veneer":"In Progress","metal":"TBC","market":"US","total_val":0.0,"monthly":{"2027/M01":0.0}},{"name":"2026-MONDO-LEXINGTON DOWNTOWN HOTEL","status":"FC","customer":"MERIDIAN","type":"NON RH","stage":"NPD","sku":11,"pic":"B. Davis","sw":"TBC - TBC","drawing":"In Progress","veneer":"In Progress","metal":"TBC","market":"US","total_val":14704.02,"monthly":{"2027/M01":14704.02}},{"name":"2026-RH-CABOT HILLSIDE HOMES","status":"FC","customer":"RH","type":"RH","stage":"NPI","sku":26,"pic":"TBD","sw":"2027/W25 - 2027/W26","drawing":"TBC","veneer":"TBC","metal":"TBC","market":"US","total_val":17930.43,"monthly":{"2027/M06":17930.43}}];

    let currentFilters = {
      year: 'All',
      type: 'All',
      stage: 'All',
      status: 'All'
    };

    function switchPage(pageNum, title) {
      document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.pbi-tab').forEach(t => t.classList.remove('active'));

      document.getElementById('page-' + pageNum).classList.add('active');
      document.getElementById('tab-btn-' + pageNum).classList.add('active');
      document.getElementById('toolbar-page-title').innerText = title;
      document.getElementById('footer-page-num').innerText = pageNum;
    }

    function setFilter(dim, val, btn) {
      currentFilters[dim] = val;
      const parent = btn.parentElement;
      parent.querySelectorAll('.slicer-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    }

    function filterByCard(st) {
      currentFilters.status = st;
      const statusPillBox = document.getElementById('slicer-status');
      statusPillBox.querySelectorAll('.slicer-btn').forEach(b => {
        if (st === 'All' && b.innerText === 'All') b.classList.add('active');
        else if (b.innerText.toLowerCase().includes(st.toLowerCase())) b.classList.add('active');
        else b.classList.remove('active');
      });
      applyFilters();
    }

    function resetFilters() {
      currentFilters = { year: 'All', type: 'All', stage: 'All', status: 'All' };
      document.querySelectorAll('.slicer-pill-box').forEach(box => {
        box.querySelectorAll('.slicer-btn').forEach((b, idx) => {
          if (idx === 0) b.classList.add('active');
          else b.classList.remove('active');
        });
      });
      applyFilters();
    }

    function formatCurrency(val) {
      if (val >= 1000000) return '$' + (val / 1000000).toFixed(2) + 'M';
      if (val >= 1000) return '$' + (val / 1000).toFixed(1) + 'K';
      return '$' + val.toFixed(0);
    }

    // A record is a (project, status) slice; its monthly keys carry the year.
    function hasYear(p, yr) {
      return Object.keys(p.monthly).some(m => m.indexOf(yr + '/') === 0);
    }

    function recValue(p, yr) {
      if (yr === 'All') return p.total_val;
      let sum = 0;
      for (const m in p.monthly) {
        if (m.indexOf(yr + '/') === 0) sum += p.monthly[m];
      }
      return sum;
    }

    function applyFilters() {
      const yr = currentFilters.year;
      const filtered = rawProjects.filter(p => {
        if (yr !== 'All' && !hasYear(p, yr)) return false;
        if (currentFilters.type === 'STRATEGIC' && p.type !== 'RH') return false;
        if (currentFilters.type === 'CUSTOM' && p.type === 'STRATEGIC') return false;
        if (currentFilters.stage !== 'All' && p.stage !== currentFilters.stage) return false;
        if (currentFilters.status !== 'All' && p.status !== currentFilters.status) return false;
        return true;
      });

      let shippedVal = 0, shippedCount = 0;
      let obVal = 0, obCount = 0;
      let norVal = 0, norCount = 0;
      let fcVal = 0, fcCount = 0;

      filtered.forEach(p => {
        const v = recValue(p, yr);
        if (p.status === 'SHIPPED') { shippedVal += v; shippedCount++; }
        else if (p.status === 'OB') { obVal += v; obCount++; }
        else if (p.status === 'NOR') { norVal += v; norCount++; }
        else if (p.status === 'FC') { fcVal += v; fcCount++; }
      });

      const totalVal = shippedVal + obVal + norVal + fcVal;
      const totalCount = shippedCount + obCount + norCount + fcCount;

      document.getElementById('kpi-shipped-val').innerText = formatCurrency(shippedVal);
      document.getElementById('kpi-shipped-count').innerText = `${shippedCount} Projects`;

      document.getElementById('kpi-ob-val').innerText = formatCurrency(obVal);
      document.getElementById('kpi-ob-count').innerText = `${obCount} Projects`;

      document.getElementById('kpi-nor-val').innerText = formatCurrency(norVal);
      document.getElementById('kpi-nor-count').innerText = `${norCount} Projects`;

      document.getElementById('kpi-fc-val').innerText = formatCurrency(fcVal);
      document.getElementById('kpi-fc-count').innerText = `${fcCount} Projects`;

      document.getElementById('kpi-total-val').innerText = formatCurrency(totalVal);
      document.getElementById('kpi-total-count').innerText = `${totalCount} Projects Active`;

      renderMatrix(filtered);
      renderGantt(filtered);
      renderStatic(filtered, yr);
    }

    function renderStatic(data, yr) {
      const targetYear = yr === '2027' ? '2027' : '2026';
      const val = p => recValue(p, yr);

      // Operational flow brackets for the displayed year
      let shippedM0109 = 0, obM1012 = 0;
      data.forEach(p => {
        if (p.status === 'SHIPPED') {
          for (let m = 1; m <= 9; m++) shippedM0109 += p.monthly[`${targetYear}/M${String(m).padStart(2, '0')}`] || 0;
        }
        if (p.status === 'OB') {
          for (let m = 10; m <= 12; m++) obM1012 += p.monthly[`${targetYear}/M${String(m).padStart(2, '0')}`] || 0;
        }
      });
      document.getElementById('kpi-shipped-period').innerText =
        yr === 'All' ? 'All Shipment Years' : 'Ship Year ' + targetYear;
      document.getElementById('bracket-shipped').innerText =
        `✓ Historical Deliveries (M01 - M09: ${formatCurrency(shippedM0109)} Shipped)`;
      document.getElementById('bracket-ob').innerText =
        `⚡ Q4 Confirmed Backlog (M10 - M12: ${formatCurrency(obM1012)} OB)`;

      // RH vs Non-RH account mix
      let rh = 0, nonRh = 0, tracked = 0, active = 0;
      data.forEach(p => {
        const v = val(p);
        tracked += v;
        if (p.type === 'STRATEGIC') rh += v; else nonRh += v;
        if (p.status === 'SHIPPED' || p.status === 'OB') active += v;
      });
      const share = t => tracked > 0 ? (t / tracked * 100) : 0;
      document.getElementById('mix-list').innerHTML = `
        <div class="hbar-item">
          <span class="hbar-name">Custom Accounts</span>
          <div class="hbar-track"><div class="hbar-fill" style="width: ${share(nonRh).toFixed(1)}%; background: var(--pbi-navy);"></div></div>
          <span class="hbar-val">${formatCurrency(nonRh)} (${share(nonRh).toFixed(1)}%)</span>
        </div>
        <div class="hbar-item">
          <span class="hbar-name">Strategic Accounts (Apex)</span>
          <div class="hbar-track"><div class="hbar-fill" style="width: ${share(rh).toFixed(1)}%; background: #C5A059;"></div></div>
          <span class="hbar-val">${formatCurrency(rh)} (${share(rh).toFixed(1)}%)</span>
        </div>`;
      document.getElementById('mix-footer').innerHTML = `
        <span>Total Tracked Volume: <strong>${formatCurrency(tracked)}</strong></span>
        <span>Active Orders (Shipped+OB): <strong>${formatCurrency(active)}</strong></span>`;

      // Top 5 hospitality accounts
      const accounts = {};
      data.forEach(p => { accounts[p.customer] = (accounts[p.customer] || 0) + val(p); });
      const top = Object.entries(accounts).sort((a, b) => b[1] - a[1]).slice(0, 5);
      const topMax = top.length ? top[0][1] : 1;
      document.getElementById('top5-list').innerHTML = top.map(([name, v], i) => `
        <div class="hbar-item">
          <span class="hbar-name">${name}</span>
          <div class="hbar-track"><div class="hbar-fill" style="width: ${(v / topMax * 100).toFixed(1)}%; background: ${i === 0 ? '#C5A059' : 'var(--pbi-navy)'};"></div></div>
          <span class="hbar-val">${formatCurrency(v)}</span>
        </div>`).join('');

      // Pipeline funnel cards
      const funnel = [
        ['funnel-fc-val', 'funnel-fc-n', 'FC', n => `${n} Forecast (FC) Projects`],
        ['funnel-nor-val', 'funnel-nor-n', 'NOR', n => `${n} Projects · Waiting for PO / Deposit`],
        ['funnel-ob-val', 'funnel-ob-n', 'OB', n => `${n} Projects · Confirmed Order Book`],
        ['funnel-sh-val', 'funnel-sh-n', 'SHIPPED', n => `${n} Projects · Delivered ${targetYear}`],
      ];
      funnel.forEach(([idV, idN, status, label]) => {
        const rows = data.filter(p => p.status === status);
        document.getElementById(idV).innerText =
          formatCurrency(rows.reduce((s, p) => s + val(p), 0));
        document.getElementById(idN).innerText = label(rows.length);
      });

      // Market distribution
      const markets = {};
      data.forEach(p => { markets[p.market] = (markets[p.market] || 0) + 1; });
      const mk = Object.entries(markets).sort((a, b) => b[1] - a[1]);
      const topMarkets = mk.slice(0, 4);
      const restCount = mk.slice(4).reduce((s, [, n]) => s + n, 0);
      if (restCount > 0) topMarkets.push(['Other', restCount]);
      const totalRows = data.length || 1;
      const mkColors = ['var(--pbi-navy)', 'var(--pbi-blue)', 'var(--pbi-teal)', 'var(--pbi-purple)', '#6B7280'];
      document.getElementById('market-list').innerHTML = topMarkets.map(([name, n], i) => `
        <div class="hbar-item">
          <span class="hbar-name">${name}</span>
          <div class="hbar-track"><div class="hbar-fill" style="width: ${(n / totalRows * 100).toFixed(0)}%; background: ${mkColors[i % mkColors.length]};"></div></div>
          <span class="hbar-val">${n} Projects (${(n / totalRows * 100).toFixed(0)}%)</span>
        </div>`).join('');

      // PIC workload
      const pics = {};
      data.forEach(p => { pics[p.pic] = (pics[p.pic] || 0) + 1; });
      const picTop = Object.entries(pics).sort((a, b) => b[1] - a[1]).slice(0, 5);
      const picMax = picTop.length ? picTop[0][1] : 1;
      document.getElementById('pic-list').innerHTML = picTop.map(([name, n]) => `
        <div class="hbar-item">
          <span class="hbar-name">${name}</span>
          <div class="hbar-track"><div class="hbar-fill" style="width: ${(n / picMax * 100).toFixed(0)}%; background: var(--pbi-navy);"></div></div>
          <span class="hbar-val">${n} Projects</span>
        </div>`).join('');
    }

    function renderMatrix(data) {
      const tbody = document.getElementById('matrix-body');
      tbody.innerHTML = '';

      const targetYear = currentFilters.year === '2027' ? '2027' : '2026';
      const months = Array.from({length: 12}, (_, i) => `${targetYear}/M${String(i + 1).padStart(2, '0')}`);

      const categories = [
        { key: 'SHIPPED', label: 'SHIPPED (Fulfilled)', cls: 'row-shipped', fillCls: 'fill-shipped' },
        { key: 'OB', label: 'ORDER BOOK (OB)', cls: 'row-ob', fillCls: 'fill-ob' },
        { key: 'NOR', label: 'NEW ORDER REQUEST (NOR)', cls: 'row-nor', fillCls: 'fill-nor' },
        { key: 'FC', label: 'FORECAST (FC)', cls: 'row-fc', fillCls: 'fill-fc' }
      ];

      const monthlyGrandTotals = Array(12).fill(0);
      let overallGrandTotal = 0;

      categories.forEach(cat => {
        const row = document.createElement('tr');
        row.className = cat.cls;

        let rowHtml = `<td class="cell-rowheader">${cat.label}</td>`;
        let catTotal = 0;

        months.forEach((m, idx) => {
          let monthSum = 0;
          data.filter(p => p.status === cat.key).forEach(p => {
            if (p.monthly[m]) monthSum += p.monthly[m];
          });

          catTotal += monthSum;
          monthlyGrandTotals[idx] += monthSum;

          const barPct = Math.min(100, (monthSum / 2000000) * 100);
          rowHtml += `<td>
            <div class="cell-bar-container">
              <span>${monthSum > 0 ? formatCurrency(monthSum) : '-'}</span>
              ${monthSum > 0 ? `<div class="cell-bar-wrap"><div class="cell-bar-fill ${cat.fillCls}" style="width: ${barPct}%;"></div></div>` : ''}
            </div>
          </td>`;
        });

        overallGrandTotal += catTotal;
        rowHtml += `<td class="cell-total">${formatCurrency(catTotal)}</td>`;
        row.innerHTML = rowHtml;
        tbody.appendChild(row);
      });

      const grandRow = document.createElement('tr');
      grandRow.className = 'row-grandtotal';
      let grandHtml = `<td class="cell-rowheader">GRAND TOTAL ($)</td>`;
      monthlyGrandTotals.forEach(val => {
        grandHtml += `<td>${val > 0 ? formatCurrency(val) : '-'}</td>`;
      });
      grandHtml += `<td class="cell-total">${formatCurrency(overallGrandTotal)}</td>`;
      grandRow.innerHTML = grandHtml;
      tbody.appendChild(grandRow);
    }

    function stageRank(stage) {
      const s = (stage || '').toUpperCase().trim();
      if (s === 'NPD') return 1;
      if (s === 'NPI') return 2;
      return 99;
    }

    function statusRank(status) {
      const st = (status || '').toUpperCase().trim();
      if (st === 'SHIPPED' || st === 'SHIP') return 1;
      if (st === 'OB') return 2;
      if (st === 'NOR') return 3;
      if (st === 'FC') return 4;
      if (st === 'ON HOLD') return 5;
      if (st === 'PIPELINE') return 6;
      if (st === 'DROPPED') return 7;
      if (st === 'CANCELLED') return 8;
      if (st === 'REMOVED') return 9;
      if (st === 'REJECTED') return 10;
      return 99;
    }

    function sortGanttRecords(list) {
      return [...list].sort((a, b) => {
        // 1. Sort by project name (same name sits next to each other)
        const nameA = (a.name || '').toLowerCase().trim();
        const nameB = (b.name || '').toLowerCase().trim();
        const nameCmp = nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: 'base' });
        if (nameCmp !== 0) return nameCmp;

        // 2. Sort by stage (NPD then NPI)
        const stageCmp = stageRank(a.stage) - stageRank(b.stage);
        if (stageCmp !== 0) return stageCmp;

        // 3. Sort by status (Ship -> OB -> NOR -> FC)
        const statusCmp = statusRank(a.status) - statusRank(b.status);
        if (statusCmp !== 0) return statusCmp;

        return 0;
      });
    }

    function renderGantt(data) {
      const tbody = document.getElementById('gantt-body');
      tbody.innerHTML = '';

      const targetYear = currentFilters.year === '2027' ? '2027' : '2026';
      const months = Array.from({length: 12}, (_, i) => `${targetYear}/M${String(i + 1).padStart(2, '0')}`);

      // Sort by Project Name -> Stage (NPD then NPI) -> Status (Ship -> OB -> NOR -> FC)
      const sortedRows = sortGanttRecords(
        data.filter(p => recValue(p, currentFilters.year) > 0)
      );

      sortedRows.forEach(p => {
        const tr = document.createElement('tr');
        const displayVal = recValue(p, currentFilters.year);

        let statusClass = 'tag-pipeline';
        let ganttClass = 'st-fc';
        if (p.status === 'SHIPPED') { statusClass = 'tag-shipped'; ganttClass = 'st-shipped'; }
        else if (p.status === 'OB') { statusClass = 'tag-ob'; ganttClass = 'st-ob'; }
        else if (p.status === 'NOR') { statusClass = 'tag-nor'; ganttClass = 'st-nor'; }
        else if (p.status === 'FC') { statusClass = 'tag-fc'; ganttClass = 'st-fc'; }
        else if (p.status === 'ON HOLD') { statusClass = 'tag-on-hold'; ganttClass = 'st-nor'; }

        const subline = p.market && p.market !== 'TBC' ? `${p.customer} | ${p.market}` : p.customer;

        let html = `
          <td>
            <div style="font-weight: 600; color: var(--pbi-navy);">${p.name}</div>
            <div style="font-size: 10.5px; color: var(--pbi-text-muted);">${subline}</div>
          </td>
          <td style="font-size: 11px; font-weight: 600;">${p.type}</td>
          <td><span style="font-size: 10.5px; font-weight: 600; color: #4B5563;">${p.stage}</span></td>
          <td><span class="status-tag ${statusClass}">${p.status}</span></td>
          <td style="text-align: right; font-weight: 600;">${formatCurrency(displayVal)}</td>
          <td style="text-align: center;">${p.sku || '-'}</td>
          <td style="font-size: 10.5px; color: #4B5563;">${p.sw}</td>
        `;

        months.forEach(m => {
          const val = p.monthly[m];
          if (val && val > 0) {
            html += `<td class="gantt-bar-cell">
              <div class="gantt-active-block ${ganttClass}" title="${p.name} (${m}): ${formatCurrency(val)}">
                ${formatCurrency(val)}
              </div>
            </td>`;
          } else {
            html += `<td class="gantt-bar-cell"><span style="color: #D1D5DB; font-size: 10px;">·</span></td>`;
          }
        });

        const drawClass = p.drawing.toLowerCase().includes('approved') ? 'approved' : 'in-progress';
        const veneerClass = p.veneer.toLowerCase().includes('approved') ? 'approved' : 'in-progress';

        html += `
          <td><span class="milestone-pill ${drawClass}">${p.drawing !== 'nan' ? p.drawing : 'TBC'}</span></td>
          <td><span class="milestone-pill ${veneerClass}">${p.veneer !== 'nan' ? p.veneer : 'TBC'}</span></td>
          <td style="font-weight: 600; color: var(--pbi-navy); font-size: 10.5px;">${p.pic}</td>
        `;

        tr.innerHTML = html;
        tbody.appendChild(tr);
      });
    }

    function filterProjects() {
      const query = document.getElementById('project-search').value.toLowerCase().trim();
      const stageSelect = document.getElementById('stage-filter-select').value;
      const yr = currentFilters.year;

      const filtered = rawProjects.filter(p => {
        if (yr !== 'All' && !hasYear(p, yr)) return false;
        if (currentFilters.type === 'STRATEGIC' && p.type !== 'RH') return false;
        if (currentFilters.type === 'CUSTOM' && p.type === 'STRATEGIC') return false;
        if (currentFilters.status !== 'All' && p.status !== currentFilters.status) return false;
        const matchesQuery = !query || p.name.toLowerCase().includes(query) || p.customer.toLowerCase().includes(query);
        const matchesStage = stageSelect === 'All' || p.stage === stageSelect;
        return matchesQuery && matchesStage;
      });

      renderGantt(filtered);
    }

    applyFilters();
