// table.js

const __PROJECTS = [
    {
        name: "SharpCry",
        version: "1.0.0",
        date: "2025-01-12",
        rating: 2,
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
        name: "ByteCracker",
        version: "2.5.0",
        date: "2025-01-10",
        rating: 1,
        description: "BloodTear Legacy Project",
        language: "C++",
        type: "Malware",
        url: "https://github.com/mastermind65535/APT65535"
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
    contents += "<li><strong>URL:</strong> <a href='" + data.url + "' target='_blank'>" + data.url + "</a></li>";
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
        responsiveLayout:"collapse",
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
