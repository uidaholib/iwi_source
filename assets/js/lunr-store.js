---
# create lunr store 
---
{%- assign items = site.data[site.metadata] -%}
var store = [ 
    {% for item in items %} 
    { 
        "indexId": {{ item.objectid | jsonify }},
        "name": {{ item.fullname | jsonify }},
        "born": {{ item.birth | append: ', ' | append: item.birth_place | jsonify }},
        "died": {{ item.death | append: ', ' | append: item.death_place | jsonify }},
        "cat": {{ item.keywords | split: ";" | join: ", " | jsonify }},
        "desc": {{ item.short_description | normalize_whitespace | jsonify }}
    }{%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
];