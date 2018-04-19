
$(function () {
    // Initiate the chart
    $('#container').highcharts('Map', {
      
      
       title: {
        text: 'Map of Bizconnect 2018'
    },
        credits: {
        enabled: false
    },
        subtitle: {
    text: 'Garett Hall Map'
},
        
      
      
        series: [
	{
		"type": "map",
		"data": [
			{
				"name": "rect861",
				"path": "M90,-631L362,-631,362,-100,90,-100,90,-631",
				"color": "#EDEDED",
               
                   hover:{
                    enabled: true
                }
                      
			
            },
			{
				"name": "rect1000",
				"path": "M2,-628L56,-628,56,46,2,46,2,-628",
				"color": "#EDEDED"
			},
			{
				"name": "rect1281",
				"path": "M399,-632L628,-632,628,-102,399,-102,399,-632",
				"color": "#EDEDED"
			},
			{
				"name": "rect1326",
				"path": "M92,-62L625,-62,625,46,92,46,92,-62",
				"color": "#EDEDED"
			},
			{
				"name": "rect1000-4",
				"path": "M661,-629L715,-629,715,45,661,45,661,-629",
				"color": "#EDEDED"
			},
			{
				"name": "rect1566",
				"path": "M0,-953L139,-953,139,-718,0,-718,0,-953",
				"color": "#EDEDED"
			},
			{
				"name": "rect1572",
				"path": "M605,-805L713,-805,713,-678,605,-678,605,-805",
				"color": "#EDEDED"
			},
			{
				"name": "rect1576",
				"path": "M541,-952L713,-952,713,-805,541,-805,541,-952",
				"color": "#EDEDED"
			},
			{
				"name": "rect1580",
				"path": "M314,-953L541,-953,541,-805,314,-805,314,-953",
				"color": "#EDEDED"
			},
			{
				
				"name": "rect1586",
				"path": "M252,-780L315,-780,315,-676,252,-676,252,-780",
				"color": "#EDEDED"
			},
			{
				"name": "rect1604",
				"path": "M434,-780L580,-780,580,-677,434,-677,434,-780",
				"color": "#EDEDED"
			},
			{
				"name": "rect1676",
				"path": "M139,-953L314,-953,314,-805,139,-805,139,-953",
				"color": "#EDEDED"
			},
			{
				"name": "rect1732",
				"path": "M315,-780L375,-780,375,-676,315,-676,315,-780",
				"color": "#EDEDED",
                   value: "Female",
                 dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '6px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "rect1736",
				"path": "M375,-780L434,-780,434,-677,375,-677,375,-780",
				"color": "#EDEDED",   
                value: "Male",
                 dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '6px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
            name: "Waffle House Inc",
            id: "1",
            path: "M58,-715L81,-715,81,-699,58,-699,58,-715",
            color: "#e9c225",
                value: 1,
               
            dataLabels: {
              enabled: true,
              format: '{point.id}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
        
              }
            }
          },
			{
				"name": "Foresters Financial",
				"path": "M87,-715L110,-715,110,-698,87,-698,87,-715",
				"color": "#e9c225",
                value: 2,
                 dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Smitty's Supply, Inc",
				"path": "M117,-714L140,-714,140,-698,117,-698,117,-714",
				"color": "#e9c225",
                value: 3,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
                
			},
			{
				"name": "Brooke Companies",
				"path": "M174,-771L188,-771,188,-747,174,-747,174,-771",
				"color": "#e9c225",
                value: 6,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Republic Finance",
				"path": "M205,-771L221,-771,221,-747,205,-747,205,-771",
				"color": "#e9c225",
                value: 7,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Louisiana Legislative Auditor's Office",
				"path": "M174,-736L189,-736,189,-713,174,-713,174,-736",
				"color": "#e9c225",
                value: 5,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '5px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Sherwin-Williams",
				"path": "M206,-737L221,-737,221,-713,206,-713,206,-737",
				"color": "#e9c225",
                value: 8,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '6px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "POOLCORP",
				"path": "M167,-705L190,-705,190,-690,167,-690,167,-705",
				"color": "#e9c225",
                value: 4,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Faulk & Winter, LLC",
				"path": "M206,-705L229,-705,229,-689,206,-689,206,-705",
				"color": "#e9c225",
                value: 9,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Hannis T. Bourgeosis, LLP",
				"path": "M380,-675L404,-675,404,-659,380,-659,380,-675",
				"color": "#e9c225",
                value: 10,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "The Martin-Brower Company",
				"path": "M407,-648L431,-648,431,-632,407,-632,407,-648",
				"color": "#e9c225",
                value: 11,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '7px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "MassMutual Louisiana",
				"path": "M328,-648L353,-648,353,-632,328,-632,328,-648",
				"color": "#e9c225",
                value: 13,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Walgreens",
				"path": "M288,-648L312,-648,312,-633,288,-633,288,-648",
				"color": "#e9c225",
                value: 14,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Walgreens",
				"path": "M383,-624L399,-624,399,-601,383,-601,383,-624",
				"color": "#e9c225",
                value: 15,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Carr Riggs & Ingram",
				"path": "M246,-648L271,-648,271,-633,246,-633,246,-648",
				"color": "#e9c225",
                value: 15,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Enterprise Holdings (Enterprise Rent-A-Car)",
				"path": "M166,-648L189,-648,189,-632,166,-632,166,-648",
				"color": "#e9c225",
                value: 16,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Postlethwaite & NetterVille",
				"path": "M92,-649L117,-649,117,-633,92,-633,92,-649",
				"color": "#e9c225",
                value: 17,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "DXC Technology",
				"path": "M56,-628L69,-628,69,-606,56,-606,56,-628",
				"color": "#e9c225",
                value: 18,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '7px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Motion Industries",
				"path": "M383,-624L399,-624,399,-601,383,-601,383,-624",
				"color": "#e9c225",
                value: 12,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "GNO Inc.",
				"path": "M74,-598L89,-598,89,-574,74,-574,74,-598",
				"color": "#e9c225",
                value: 19,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Eriksen Krentel",
				"path": "M57,-566L71,-566,71,-544,57,-544,57,-566",
				"color": "#e9c225",
                value: 20,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '6px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Sanderson Farms",
				"path": "M75,-509L89,-509,89,-486,75,-486,75,-509",
				"color": "#e9c225",
                value: 21,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "York Risk Services Group",
				"path": "M57,-452L71,-452,71,-429,57,-429,57,-452",
				"color": "#e9c225",
                value: 22,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			
			{
				"name": "Tower Loan",
				"path": "M57,-377L72,-377,72,-354,57,-354,57,-377",
				"color": "#e9c225",
                value: 23,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			
			{
				"name": "IBM",
				"path": "M57,-302L71,-302,71,-278,57,-278,57,-302",
				"color": "#e9c225",
                value: 24,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			
			{
				"name": "Edward Jones",
				"path": "M76,-208L90,-208,90,-184,76,-184,76,-208",
				"color": "#e9c225",
                value: 25,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '6px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Latter & Blum Classic Homes & Properties",
				"path": "M57,-177L71,-177,71,-155,57,-155,57,-177",
				"color": "#e9c225",
                value: 26,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			
			{
				"name": "ArcBest",
				"path": "M58,-103L69,-103,69,-79,58,-79,58,-103",
				"color": "#e9c225",
                value: 27,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Bankers Life",
				"path": "M106,-80L130,-80,130,-64,106,-64,106,-80",
				"color": "#e9c225",
                value: 28,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Louisiana Cat",
				"path": "M170,-80L194,-80,194,-63,170,-63,170,-80",
				"color": "#e9c225",
                value: 29,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Fifth District Savings Bank",
				"path": "M221,-98L243,-98,243,-85,221,-85,221,-98",
				"color": "#e9c225",
                value: 30,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Republic National Distributing Company",
				"path": "M257,-79L283,-79,283,-64,257,-64,257,-79",
				"color": "#e9c225",
                value: 31,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "AFLAC",
				"path": "M320,-100L343,-100,343,-84,320,-84,320,-100",
				"color": "#e9c225",
                "text": "<a href='http://www.google.com'> google </a>",
                value: 32,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '7px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Western & Southern Life",
				"path": "M350,-81L374,-81,374,-63,350,-63,350,-81",
				"color": "#e9c225",
                value: 33,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Ferguson Enterprises",
				"path": "M363,-124L379,-124,379,-100,363,-100,363,-124",
				"color": "#e9c225",
                value: 34,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Express Employment Professionals",
				"path": "M383,-155L399,-155,399,-132,383,-132,383,-155",
				"color": "#e9c225",
                value: 35,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '7px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			
			{
				"name": "Northwestern Mutual",
				"path": "M363,-206L378,-206,378,-189,360,-189,363,-206",
				"color": "#e9c225",
                value: 36,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '4.5px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Fastenal Company",
				"path": "M383,-231L399,-231,399,-212,383,-212,383,-231",
				"color": "#e9c225",
                value: 37,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "La. Farm Bureau Ins Co.",
				"path": "M364,-252L378,-252,378,-233,364,-233,374,-252",
				"color": "#e9c225",
                value: 38,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '4.3px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Modern Woodmen of America",
				"path": "M383,-334L399,-334,399,-311,383,-311,383,-334",
				"color": "#e9c225",
                value: 39,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Entergy",
				"path": "M363,-424L379,-424,379,-400,363,-400,363,-424",
				"color": "#e9c225",
                value: 40,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Alexis Ducorbier State Farm Insurance Agency",
				"path": "M364,-485L378,-485,378,-461,364,-461,364,-485",
				"color": "#e9c225",
                value: 41,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			
			{
				"name": "Becker Professional Education",
				"path": "M383,-566L400,-566,400,-542,383,-542,383,-566",
				"color": "#e9c225",
                value: 42,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '8px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			},
			{
				"name": "Chic-fil-A Denham Springs",
				"path": "M363,-594L379,-594,379,-570,363,-570,363,-594",
				"color": "#e9c225",
                value: 43,
                  dataLabels: {
              enabled: true,
              format: '{point.value}',
              style :{
                fontSize: '6px',
                color: '#000',
                  strokeOpacity: 0.2
              }
            }
			}
		]
	},
	{
		"type": "mapline",
		"data": [
			{
				"name": "path1004",
				"path": "M2,-628L2,46L56,46L56,-628Z"
			},
			{
				"name": "path1052",
				"path": "M56,-592,1,-592"
			},
			{
				"name": "path1052-1",
				"path": "M56,-553,1,-554"
			},
			{
				"name": "path1052-4",
				"path": "M56,-515,2,-516"
			},
			{
				"name": "path1052-40",
				"path": "M58,-479,3,-479"
			},
			{
				"name": "path1052-3",
				"path": "M57,-441,2,-441"
			},
			{
				"name": "path1052-2",
				"path": "M55,-403,0,-404"
			},
			{
				"name": "path1052-7",
				"path": "M55,-366,1,-366"
			},
			{
				"name": "path1052-6",
				"path": "M56,-328,2,-328"
			},
			{
				"name": "path1052-46",
				"path": "M57,-290,2,-290"
			},
			{
				"name": "path1052-25",
				"path": "M57,-254,2,-254"
			},
			{
				"name": "path1052-0",
				"path": "M57,-219,3,-219"
			},
			{
				"name": "path1052-47",
				"path": "M56,-178,1,-178"
			},
			{
				"name": "path1052-9",
				"path": "M55,-139,1,-140"
			},
			{
				"name": "path1052-70",
				"path": "M56,-103,2,-103"
			},
			{
				"name": "path1052-64",
				"path": "M56,-66,1,-66"
			},
			{
				"name": "path1052-21",
				"path": "M56,-28,2,-29"
			},
			{
				"name": "path1052-17",
				"path": "M56,9,1,9"
			},
			{
				"name": "path1240",
				"path": "M90,-631L90,-100L362,-100L362,-631Z"
			},
		
			{
				"name": "path1244",
				"path": "M361,-542,89,-540"
			},
			{
				"name": "path1244-0",
				"path": "M363,-453,90,-451"
			},
			{
				"name": "path1244-8",
				"path": "M363,-366,90,-364"
			},
			{
				"name": "path1244-3",
				"path": "M361,-280,89,-277"
			},
			{
				"name": "path1244-03",
				"path": "M361,-152,89,-150"
			},
			{
				"name": "path1283",
				"path": "M399,-632C401,-189,399,-102,399,-102L628,-102L628,-632Z"
			},
			{
				"name": "path1285",
				"path": "M401,-455C627,-455,627,-455,627,-455L627,-455L628,-452"
			},
			{
				"name": "path1285-3",
				"path": "M402,-368C628,-368,628,-368,628,-368L628,-368L629,-365"
			},
			{
				"name": "path1285-6",
				"path": "M400,-279C626,-279,626,-279,626,-279L626,-279L627,-277"
			},
			{
				"name": "path1320",
				"path": "M490,-190C626,-191,626,-191,626,-191L625,-190"
			},
			{
				"name": "path1322",
				"path": "M491,-277C492,-102,492,-102,492,-102L492,-102"
			},
			{
				"name": "path1324",
				"path": "M490,-632C489,-456,489,-456,489,-456"
			},
			{
				"name": "path1328",
				"path": "M92,-62C92,46,92,46,92,46L625,46L625,-62z"
			},
			{
				"name": "path1330",
				"path": "M141,-60C142,47,141,47,141,47L141,47"
			},
			{
				"name": "path1330-0",
				"path": "M227,-62C229,44,227,44,227,44L227,44"
			},
			{
				"name": "path1330-5",
				"path": "M315,-61C317,45,315,45,315,45L315,45"
			},
			{
				"name": "path1330-8",
				"path": "M402,-64C403,43,402,43,402,43L402,43"
			},
			{
				"name": "path1371",
				"path": "M89,-31C140,-32,139,-31,139,-31L140,-32"
			},
			{
				"name": "path1371-4",
				"path": "M89,9C140,8,139,9,139,9L140,8"
			},
			{
				"name": "path1412",
				"path": "M489,-61C493,44,491,44,491,44"
			},
			{
				"name": "path1412-2",
				"path": "M574,-62C578,43,577,43,577,43"
			},
			{
				"name": "path1004-2",
				"path": "M661,-629L661,45L715,45L715,-629Z"
			},
			{
				"name": "path1459",
				"path": "M662,-592C715,-591,715,-591,715,-591"
			},
			{
				"name": "path1459-4",
				"path": "M661,-554C715,-553,715,-553,715,-553"
			},
			{
				"name": "path1459-0",
				"path": "M660,-517C714,-516,714,-516,714,-516"
			},
			{
				"name": "path1459-2",
				"path": "M661,-478C714,-477,714,-477,714,-477"
			},
			{
				"name": "path1459-1",
				"path": "M660,-442C714,-441,714,-441,714,-441"
			},
			{
				"name": "path1459-25",
				"path": "M661,-404C714,-402,714,-402,714,-402"
			},
			{
				"name": "path1459-6",
				"path": "M662,-366C716,-365,716,-365,716,-365"
			},
			{
				"name": "path1459-14",
				"path": "M662,-328C716,-327,716,-327,716,-327"
			},
			{
				"name": "path1459-5",
				"path": "M660,-292C714,-290,714,-290,714,-290"
			},
			{
				"name": "path1459-3",
				"path": "M662,-253C716,-252,716,-252,716,-252"
			},
			{
				"name": "path1459-58",
				"path": "M661,-215C715,-214,715,-214,715,-214"
			},
			{
				"name": "path1459-24",
				"path": "M660,-180C714,-178,714,-178,714,-178"
			},
			{
				"name": "path1459-39",
				"path": "M661,-141C714,-140,714,-140,714,-140"
			},
			{
				"name": "path1459-9",
				"path": "M660,-104C714,-103,714,-103,714,-103"
			},
			{
				"name": "path1459-96",
				"path": "M661,-66C715,-64,715,-64,715,-64"
			},
			{
				"name": "path1459-93",
				"path": "M660,-27C714,-26,714,-26,714,-26"
			},
			{
				"name": "path1459-91",
				"path": "M661,10C714,12,714,12,714,12"
			},
			{
				"name": "path1568",
				"path": "M0,-953C139,-953,139,-953,139,-953L139,-718L0,-718Z"
			},
			{
				"name": "path1574",
				"path": "M605,-805C713,-805,713,-805,713,-805L713,-678L605,-678z"
			},
			{
				"name": "path1578",
				"path": "M541,-952C713,-952,713,-952,713,-952L713,-805C713,-805,541,-805,541,-805L541,-805z"
			},
			{
				"name": "path1582",
				"path": "M314,-953C541,-953,541,-953,541,-953L541,-805L314,-805Z"
			},
			{
				"name": "path1588",
				"path": "M252,-780C315,-780,315,-780,315,-780L315,-676L252,-676z"
			},
			{
				"name": "path1600",
				"path": "M315,-780C374,-780,374,-780,374,-780L375,-676,315,-676z"
			},
			{
				"name": "path1602",
				"path": "M374,-780C434,-780,434,-780,434,-780L434,-677C434,-677,375,-676,375,-676L375,-676z"
			},
			{
				"name": "path1606",
				"path": "M434,-780C580,-780,580,-780,580,-780L580,-677C580,-677,434,-677,434,-677,434,-677,434,-677,434,-677z"
			},
			{
				"name": "path1678",
				"path": "M139,-953C314,-953,314,-953,314,-953L314,-953,462NaNNaN-953Z"
			},
			{
				"name": "path1680",
				"path": "M165,-845C313,-847,314,-847,314,-847"
			},
			{
				"name": "path1680-3",
				"path": "M165,-804C313,-805,314,-805,314,-805"
			},
			{
				"name": "path1697",
				"path": "M165,-845C165,-804,165,-804,165,-804"
			},
			{
				"name": "path1697-4",
				"path": "M203,-845C203,-804,203,-804,203,-804"
			},
			{
				"name": "path1697-5",
				"path": "M239,-845C239,-804,239,-804,239,-804"
			},
			{
				"name": "path1697-58",
				"path": "M278,-847C278,-806,278,-806,278,-806"
			},
			{
				"name": "path1697-6",
				"path": "M314,-847C314,-805,314,-805,314,-805"
			},
			{
				"name": "path1734",
				"path": "M315,-780C374,-780,374,-780,374,-780L375,-676,315,-676z"
			}
		]
	}
]
		
		
		
		,
/*dataLabels: {
                enabled: true,
				color: '#f50110',
                format: '{point.name}'
            },*/
            
       plotOptions: {
        series: {
            states: {
                hover: {
                    color: '#a4edba',
              enabled: false,
                }
            }
        }
    },   
	
      
      
 tooltip: {
    useHTML: true,
  style: {
    pointerEvents: 'auto'
  },
            hideDelay: 2000,
            headerFormat: '',
     followPointer: false,
     backgroundColor: "#328332",
   
   formatter: function() {
//       return window.currentText;
                if(this.point.name == 'path1004-2'||this.point.name == 'rect861'|| this.point.name == 'rect1000'||this.point.name == 'rect1326'||this.point.name == 'rect1000-4'||this.point.name == 'rect1566'||this.point.name == 'rect1572'||this.point.name == 'rect1576'|| this.point.name == 'rect1586'||this.point.name == 'rect1732'||this.point.name == 'rect1736'||this.point.name == 'rect1604'||this.point.name == 'rect1281'||this.point.name == 'rect1580'|| this.point.name == 'rect1676'||this.point.name == 'rect1326'||this.point.name == 'rect1000-4'||this.point.name == 'rect1566'||this.point.name == 'rect1572'||this.point.name == 'rect1576'|| this.point.name == 'rect1586'||this.point.name == 'rect1732'||this.point.name == 'rect1736'||this.point.name == 'rect1604'||this.point.name == 'path1004'|| this.point.name == 'path1052'||this.point.name == 'path1052-1'|| this.point.name == 'path1052-4'||this.point.name == 'path1052-40'|| this.point.name == 'path1052-3'||this.point.name == 'path1052-2'|| this.point.name == 'path1052-7'||this.point.name == 'path1052-6'|| this.point.name == 'path1052-46'||this.point.name == 'path1052-46'|| this.point.name == 'path1052-25'||this.point.name == 'path1052-0'|| this.point.name == 'path1052-47'||this.point.name == 'path1052-9'|| this.point.name == 'path1052-70'||this.point.name == 'path1052-64'|| this.point.name == 'path1052-17'||this.point.name == 'path1052-21'|| this.point.name == 'path1240'||this.point.name == 'path1244'|| this.point.name == 'path1244-0'||this.point.name == 'path1244-3'|| this.point.name == 'path1244-03'||this.point.name == 'path1244-8'|| this.point.name == 'path1283'||this.point.name == 'path1285'|| this.point.name == 'path1285-3'||this.point.name == 'path1285-6'|| this.point.name == 'path1320'||this.point.name == 'path1322'|| this.point.name == 'path1324'||this.point.name == 'path1328'|| this.point.name == 'path1330'||this.point.name == 'path1330-0'|| this.point.name == 'path1330-5'||this.point.name == 'path1330-8'|| this.point.name == 'path1371'||this.point.name == 'path1371-4'|| this.point.name == 'path1341-2'||this.point.name == 'path1459'|| this.point.name == 'path1459-0'||this.point.name == 'path1459-4'|| this.point.name == 'path1459-2'||this.point.name == 'path1459-1'|| this.point.name == 'path1459-6'||this.point.name == 'path1459-14'|| this.point.name == 'path1459-5'||this.point.name == 'path1459-3'|| this.point.name == 'path1459-58'||this.point.name == 'path1459-24'|| this.point.name == 'path1459-39'||this.point.name == 'path1459-9'|| this.point.name == 'path1459-93'||this.point.name == 'path1459-96'|| this.point.name == 'path1459-91'||this.point.name == 'path1568'|| this.point.name == 'path1574'||this.point.name == 'path1578'|| this.point.name == 'path1582'||this.point.name == 'path1588'|| this.point.name == 'path1600'||this.point.name == 'path1602'|| this.point.name == 'path1606'||this.point.name == 'path1678'|| this.point.name == 'path1680'||this.point.name == 'path1697'|| this.point.name == 'path1697-4'||this.point.name == 'path1697-5'|| this.point.name == 'path1697-58'||this.point.name == 'path1697-6'|| this.point.name == 'path1734'){
                  return false ;
                // to disable the tooltip at a point return false 
                }else {
                    return '<b>'+this.point.value+ ". " +this.point.name +'</b><br/>'+ this.point.text;
            }   
            }
   
    
			
          // pointFormat: '{point.name}'
        }
		
		
		
    })
	
});
   
    
    $(function(){
          $("#companies-list-A-D").find('li>a').off().click(function(e){
              e.preventDefault();
            var curIndex = parseInt($(this).parent().attr('data-target'));
              
            var chart = $("#container").highcharts();
            
            chart.series[0].data[curIndex].setState('hover');
            chart.tooltip.refresh(chart.series[0].data[curIndex]);

        })
      })
    
//starting another same function but for different accordion

 $(function(){
          $("#companies-list-E-F").find('li>a').off().click(function(e){
              e.preventDefault();
            var curIndex = parseInt($(this).parent().attr('data-target'));
              
            var chart = $("#container").highcharts();
            
            chart.series[0].data[curIndex].setState('hover');
            chart.tooltip.refresh(chart.series[0].data[curIndex]);

        })
      })
 $(function(){
          $("#companies-list-G-L").find('li>a').off().click(function(e){
              e.preventDefault();
            var curIndex = parseInt($(this).parent().attr('data-target'));
              
            var chart = $("#container").highcharts();
            
            chart.series[0].data[curIndex].setState('hover');
            chart.tooltip.refresh(chart.series[0].data[curIndex]);

        })
      })

 $(function(){
          $("#companies-list-M-P").find('li>a').off().click(function(e){
              e.preventDefault();
            var curIndex = parseInt($(this).parent().attr('data-target'));
              
            var chart = $("#container").highcharts();
            
            chart.series[0].data[curIndex].setState('hover');
            chart.tooltip.refresh(chart.series[0].data[curIndex]);

        })
      })