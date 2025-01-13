// table.js

const __PROJECTS = [
    {
        name: "SharpCry",
        version: "1.0.0",
        date: "2025-01-12",
        rating: 3,
        description: "C# Intelligent Ransomware PoC",
        language: "C#",
        type: "Malware",
        url: "https://github.com/mastermind65535/SharpCry"
    },
    {
        name: "APT65535",
        version: "1.0.0",
        date: "2025-01-13",
        rating: 5,
        description: "Advanced Persistent Threat 65535 PoC Spyware",
        language: "C++",
        type: "Malware",
        url: "https://github.com/mastermind65535/APT65535"
    },
    {
        name: "BloodTear-old",
        version: "1.0.0",
        date: "2025-01-08",
        rating: 3,
        description: "Advanced Debugger + Disassembler + Decompiler",
        language: "Python",
        type: "Decompiler",
        url: "https://github.com/mastermind65535/BloodTear-old"
    },
    {
        name: "HDE-old",
        version: "5.8.3",
        date: "2025-01-06",
        rating: 1,
        description: "BloodTear Legacy Project",
        language: "C++",
        type: "Decompiler",
        url: "https://github.com/mastermind65535/HDE-old"
    },
    {
        name: "ByteCracker-old",
        version: "2.5.0",
        date: "2025-01-10",
        rating: 3,
        description: "BloodTear Legacy Project",
        language: "C++",
        type: "Disassembler",
        url: "https://github.com/mastermind65535/ByteCracker-old"
    },
    {
        name: "Elite",
        version: "1.3.2",
        date: "2024-07-22",
        rating: 3,
        description: "Network MITM Attack Utility w/ Graphic User Interface (GUI)",
        language: "C#",
        type: "General Hacking Utility",
        url: "N/A"
    },
    {
        name: "Elite Console",
        version: "6.2.3",
        date: "2024-11-10",
        rating: 5,
        description: "Network MITM Attack Utility w/ Command Line Interface (CLI)",
        language: "C#",
        type: "General Hacking Utility",
        url: "N/A"
    },
    {
        name: "Elite++",
        version: "2.0.0",
        date: "2024-08-16",
        rating: 4,
        description: "Network MITM Attack Utility w/ Graphic User Interface (GUI)",
        language: "C#",
        type: "General Hacking Utility",
        url: "N/A"
    },
    {
        name: "WatchCat",
        version: "6.0.0",
        date: "2024-04/14",
        rating: 5,
        description: "Network Device Discovery Utility",
        language: "C# | Python",
        type: "General Recon Utility",
        url: "N/A"
    },
    {
        name: "Alpha",
        version: "1.5.0",
        date: "2024-05-26",
        rating: 4,
        description: "Reverse Shell Backdoor",
        language: "Python",
        type: "Malware",
        url: "N/A"
    },
    {
        name: "BlackTech",
        version: "4.1.0",
        date: "2024-11-08",
        rating: 5,
        description: "Chrome Password Cracker",
        language: "C++ | C# | Python",
        type: "Malware",
        url: "N/A"
    },
    {
        name: "Fake MS Updater",
        version: "1.0.0",
        date: "2025-01-12",
        rating: 5,
        description: "Fake Microsoft Windows Emergency Updater",
        language: "C#",
        type: "Trojan",
        url: "https://github.com/mastermind65535/Fake-MS-Updater"
    }
];

var minMaxFilterEditor = function (cell, onRendered, success, cancel, editorParams) {

    var end;

    var container = document.createElement("span");

    //create and style inputs
    var start = document.createElement("input");
    start.setAttribute("type", "number");
    start.setAttribute("placeholder", "Min");
    start.setAttribute("min", 0);
    start.setAttribute("max", 100);
    start.style.padding = "4px";
    start.style.width = "50%";
    start.style.boxSizing = "border-box";

    start.value = cell.getValue();

    function buildValues() {
        success({
            start: start.value,
            end: end.value,
        });
    }

    function keypress(e) {
        if (e.keyCode == 13) {
            buildValues();
        }

        if (e.keyCode == 27) {
            cancel();
        }
    }

    end = start.cloneNode();
    end.setAttribute("placeholder", "Max");

    start.addEventListener("change", buildValues);
    start.addEventListener("blur", buildValues);
    start.addEventListener("keydown", keypress);

    end.addEventListener("change", buildValues);
    end.addEventListener("blur", buildValues);
    end.addEventListener("keydown", keypress);


    container.appendChild(start);
    container.appendChild(end);

    return container;
}

//custom max min filter function
function minMaxFilterFunction(headerValue, rowValue, rowData, filterParams) {
    //headerValue - the value of the header filter element
    //rowValue - the value of the column in this row
    //rowData - the data for the row being filtered
    //filterParams - params object passed to the headerFilterFuncParams property

    if (rowValue) {
        if (headerValue.start != "") {
            if (headerValue.end != "") {
                return rowValue >= headerValue.start && rowValue <= headerValue.end;
            } else {
                return rowValue >= headerValue.start;
            }
        } else {
            if (headerValue.end != "") {
                return rowValue <= headerValue.end;
            }
        }
    }

    return true; //must return a boolean, true if it passes the filter.
}

var rowPopupFormatter = function(e, row, onRendered){
    var data = row.getData(),
    container = document.createElement("div"),
    contents = "<strong style='font-size:1.2em;'>Project Details</strong><br/><ul style='padding:0; margin-top:10px; margin-bottom:0;'>";
    
    contents += "<li><strong>Name:</strong> " + data.name + "</li>";
    contents += "<li><strong>Version:</strong> " + data.version + "</li>";
    contents += "<li><strong>Date:</strong> " + data.date + "</li>";
    contents += "<li><strong>Rating:</strong> " + data.rating + "</li>";
    contents += "<li><strong>Description:</strong> " + data.description + "</li>";
    contents += "<li><strong>Language:</strong> " + data.language + "</li>";
    contents += "<li><strong>Type:</strong> " + data.type + "</li>";
    var LINK = "<a href='" + data.url + "' target='_blank'>" + data.url + "</a>";
    if (data.url == "N/A") { LINK = "N/A"; }
    contents += "<li><strong>URL:</strong> " + LINK + "</li>";
    contents += "</ul>";

    container.style.color = "black";
    container.style.backgroundColor = "white";

    container.innerHTML = contents;

    return container;
};

document.addEventListener('DOMContentLoaded', () => {
    var table = new Tabulator("#projects-frame", {
        height: "600px",
        layout: "fitColumns",
        rowClickPopup: rowPopupFormatter,
        columns: [
            {
                title: "Name",
                field: "name",
                sorter: "string",
                width: 200,
                headerFilter: true
            },
            {
                title: "Version",
                field: "version",
                sorter: "string",
                width: 100,
                headerFilter: true
            },
            {
                title: "Date",
                field: "date",
                sorter: "date", 
                width: 150, 
                hozAlign: "left", 
                headerFilter: true
            },
            {
                title: "Type", 
                field: "type", 
                sorter: "string", 
                width: 250, 
                headerFilter: true
            },
            {
                title: "Language", 
                field: "language", 
                sorter: "string", 
                width: 150, 
                headerFilter: true
            },
            {
                title: "Rating", 
                field: "rating", 
                formatter: "star", 
                hozAlign: "center", 
                width: 150, headerFilter: minMaxFilterEditor, 
                headerFilterFunc: minMaxFilterFunction,
                headerFilterLiveFilter: false
            },
            {
                title: "Description", 
                field: "description", 
                sorter: "string", 
                widthGrow: 2, 
                headerFilter: true
            }
        ],
        data: __PROJECTS,
    });
});
