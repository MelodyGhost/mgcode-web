(this["webpackJsonp@mgcode/local-client"]=this["webpackJsonp@mgcode/local-client"]||[]).push([[366],{550:function(t,n){!function(t){var n={pattern:/(^[ \t]*| {2}|\t)#.*/m,lookbehind:!0,greedy:!0},e={pattern:/((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,lookbehind:!0,inside:{punctuation:/^[$@&%]\{|\}$/}};function a(t,a){var o={"section-header":{pattern:/^ ?\*{3}.+?\*{3}/,alias:"keyword"}};for(var r in a)o[r]=a[r];return o.tag={pattern:/([\r\n](?:  |\t)[ \t]*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/\[|\]/}},o.variable=e,o.comment=n,{pattern:RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g,(function(){return t})),"im"),alias:"section",inside:o}}var o={pattern:/(\[Documentation\](?:  |\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},r={pattern:/([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,alias:"function",inside:{variable:e}},i={pattern:/([\r\n](?:  |\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,inside:{variable:e}};t.languages.robotframework={settings:a("Settings",{documentation:{pattern:/([\r\n] ?Documentation(?:  |\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},property:{pattern:/([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0}}),variables:a("Variables"),"test-cases":a("Test Cases",{"test-name":r,documentation:o,property:i}),keywords:a("Keywords",{"keyword-name":r,documentation:o,property:i}),tasks:a("Tasks",{"task-name":r,documentation:o,property:i}),comment:n},t.languages.robot=t.languages.robotframework}(Prism)}}]);
//# sourceMappingURL=366.ff8cab46.chunk.js.map