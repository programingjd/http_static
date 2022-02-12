"use strict";function ucs2length(e){const t=e.length;let a,s=0,r=0;for(;r<t;)++s,(a=e.charCodeAt(r++))>=55296&&a<=56319&&r<t&&56320==(64512&(a=e.charCodeAt(r)))&&++r;return s};
export const validateMimeTypeConfig_=validate10;const schema11={$schema:"http://json-schema.org/draft-07/schema#",$id:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json",title:"MimeTypeConfig",description:"File type config for files of a specific mime type",type:"object",properties:{suffixes:{description:"A list of file prefixes that identifies files of this mime type.",type:"array",items:{type:"string"},minItems:1,uniqueItems:!0},headers:{description:"Custom headers",type:"object",patternProperties:{"^[a-zA-Z0-9-_]+$":{oneOf:[{type:"string"},{type:"null"}]}},additionalProperties:!1},compress:{description:"Whether to enable automatic brotli compression or not.",type:"boolean"},cache_threshold:{description:"Size (uncompressed) threshold: larger files will be read directly from disk.",oneOf:[{type:"number",minimum:0},{type:"null"},{type:"string",pattern:"^[0-9]+[.]?[0.9]*[km]?b$"}]}},required:["suffixes","compress","cache_threshold"],additionalProperties:!1},pattern0=new RegExp("^[a-zA-Z0-9-_]+$","u"),pattern2=new RegExp("^[0-9]+[.]?[0.9]*[km]?b$","u");function validate10(e,{instancePath:t="",parentData:s,parentDataProperty:a,rootData:r=e}={}){let p=null,n=0;if(e&&"object"==typeof e&&!Array.isArray(e)){if(void 0===e.suffixes){const s={instancePath:t,schemaPath:"#/required",keyword:"required",params:{missingProperty:"suffixes"},message:"must have required property 'suffixes'",schema:schema11.required,parentSchema:schema11,data:e};null===p?p=[s]:p.push(s),n++}if(void 0===e.compress){const s={instancePath:t,schemaPath:"#/required",keyword:"required",params:{missingProperty:"compress"},message:"must have required property 'compress'",schema:schema11.required,parentSchema:schema11,data:e};null===p?p=[s]:p.push(s),n++}if(void 0===e.cache_threshold){const s={instancePath:t,schemaPath:"#/required",keyword:"required",params:{missingProperty:"cache_threshold"},message:"must have required property 'cache_threshold'",schema:schema11.required,parentSchema:schema11,data:e};null===p?p=[s]:p.push(s),n++}for(const s in e)if("suffixes"!==s&&"headers"!==s&&"compress"!==s&&"cache_threshold"!==s){const a={instancePath:t,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:s},message:"must NOT have additional properties",schema:!1,parentSchema:schema11,data:e};null===p?p=[a]:p.push(a),n++}if(void 0!==e.suffixes){let s=e.suffixes;if(Array.isArray(s)){if(s.length<1){const e={instancePath:t+"/suffixes",schemaPath:"#/properties/suffixes/minItems",keyword:"minItems",params:{limit:1},message:"must NOT have fewer than 1 items",schema:1,parentSchema:schema11.properties.suffixes,data:s};null===p?p=[e]:p.push(e),n++}const e=s.length;for(let a=0;a<e;a++){let e=s[a];if("string"!=typeof e){const s={instancePath:t+"/suffixes/"+a,schemaPath:"#/properties/suffixes/items/type",keyword:"type",params:{type:"string"},message:"must be string",schema:schema11.properties.suffixes.items.type,parentSchema:schema11.properties.suffixes.items,data:e};null===p?p=[s]:p.push(s),n++}}let a,r=s.length;if(r>1){const e={};for(;r--;){let i=s[r];if("string"==typeof i){if("number"==typeof e[i]){const o={instancePath:t+"/suffixes",schemaPath:"#/properties/suffixes/uniqueItems",keyword:"uniqueItems",params:{i:r,j:a=e[i]},message:"must NOT have duplicate items (items ## "+a+" and "+r+" are identical)",schema:!0,parentSchema:schema11.properties.suffixes,data:s};null===p?p=[o]:p.push(o),n++;break}e[i]=r}}}}else{const e={instancePath:t+"/suffixes",schemaPath:"#/properties/suffixes/type",keyword:"type",params:{type:"array"},message:"must be array",schema:schema11.properties.suffixes.type,parentSchema:schema11.properties.suffixes,data:s};null===p?p=[e]:p.push(e),n++}}if(void 0!==e.headers){let s=e.headers;if(s&&"object"==typeof s&&!Array.isArray(s)){for(const e in s)if(!pattern0.test(e)){const a={instancePath:t+"/headers",schemaPath:"#/properties/headers/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:e},message:"must NOT have additional properties",schema:!1,parentSchema:schema11.properties.headers,data:s};null===p?p=[a]:p.push(a),n++}for(const e in s)if(pattern0.test(e)){let a=s[e];const r=n;let o=!1,h=null;const c=n;if("string"!=typeof a){const s={instancePath:t+"/headers/"+e.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/properties/headers/patternProperties/%5E%5Ba-zA-Z0-9-_%5D%2B%24/oneOf/0/type",keyword:"type",params:{type:"string"},message:"must be string",schema:schema11.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[0].type,parentSchema:schema11.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[0],data:a};null===p?p=[s]:p.push(s),n++}(i=c===n)&&(o=!0,h=0);const m=n;if(null!==a){const s={instancePath:t+"/headers/"+e.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/properties/headers/patternProperties/%5E%5Ba-zA-Z0-9-_%5D%2B%24/oneOf/1/type",keyword:"type",params:{type:"null"},message:"must be null",schema:schema11.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[1].type,parentSchema:schema11.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[1],data:a};null===p?p=[s]:p.push(s),n++}var i;if((i=m===n)&&o?(o=!1,h=[h,1]):i&&(o=!0,h=1),o)n=r,null!==p&&(r?p.length=r:p=null);else{const s={instancePath:t+"/headers/"+e.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/properties/headers/patternProperties/%5E%5Ba-zA-Z0-9-_%5D%2B%24/oneOf",keyword:"oneOf",params:{passingSchemas:h},message:"must match exactly one schema in oneOf",schema:schema11.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf,parentSchema:schema11.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"],data:a};null===p?p=[s]:p.push(s),n++}}}else{const e={instancePath:t+"/headers",schemaPath:"#/properties/headers/type",keyword:"type",params:{type:"object"},message:"must be object",schema:schema11.properties.headers.type,parentSchema:schema11.properties.headers,data:s};null===p?p=[e]:p.push(e),n++}}if(void 0!==e.compress){let s=e.compress;if("boolean"!=typeof s){const e={instancePath:t+"/compress",schemaPath:"#/properties/compress/type",keyword:"type",params:{type:"boolean"},message:"must be boolean",schema:schema11.properties.compress.type,parentSchema:schema11.properties.compress,data:s};null===p?p=[e]:p.push(e),n++}}if(void 0!==e.cache_threshold){let s=e.cache_threshold;const a=n;let r=!1,i=null;const h=n;if("number"==typeof s&&isFinite(s)){if(s<0||isNaN(s)){const e={instancePath:t+"/cache_threshold",schemaPath:"#/properties/cache_threshold/oneOf/0/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0",schema:0,parentSchema:schema11.properties.cache_threshold.oneOf[0],data:s};null===p?p=[e]:p.push(e),n++}}else{const e={instancePath:t+"/cache_threshold",schemaPath:"#/properties/cache_threshold/oneOf/0/type",keyword:"type",params:{type:"number"},message:"must be number",schema:schema11.properties.cache_threshold.oneOf[0].type,parentSchema:schema11.properties.cache_threshold.oneOf[0],data:s};null===p?p=[e]:p.push(e),n++}(o=h===n)&&(r=!0,i=0);const c=n;if(null!==s){const e={instancePath:t+"/cache_threshold",schemaPath:"#/properties/cache_threshold/oneOf/1/type",keyword:"type",params:{type:"null"},message:"must be null",schema:schema11.properties.cache_threshold.oneOf[1].type,parentSchema:schema11.properties.cache_threshold.oneOf[1],data:s};null===p?p=[e]:p.push(e),n++}if((o=c===n)&&r)r=!1,i=[i,1];else{o&&(r=!0,i=1);const e=n;if("string"==typeof s){if(!pattern2.test(s)){const e={instancePath:t+"/cache_threshold",schemaPath:"#/properties/cache_threshold/oneOf/2/pattern",keyword:"pattern",params:{pattern:"^[0-9]+[.]?[0.9]*[km]?b$"},message:'must match pattern "^[0-9]+[.]?[0.9]*[km]?b$"',schema:"^[0-9]+[.]?[0.9]*[km]?b$",parentSchema:schema11.properties.cache_threshold.oneOf[2],data:s};null===p?p=[e]:p.push(e),n++}}else{const e={instancePath:t+"/cache_threshold",schemaPath:"#/properties/cache_threshold/oneOf/2/type",keyword:"type",params:{type:"string"},message:"must be string",schema:schema11.properties.cache_threshold.oneOf[2].type,parentSchema:schema11.properties.cache_threshold.oneOf[2],data:s};null===p?p=[e]:p.push(e),n++}var o;(o=e===n)&&r?(r=!1,i=[i,2]):o&&(r=!0,i=2)}if(r)n=a,null!==p&&(a?p.length=a:p=null);else{const e={instancePath:t+"/cache_threshold",schemaPath:"#/properties/cache_threshold/oneOf",keyword:"oneOf",params:{passingSchemas:i},message:"must match exactly one schema in oneOf",schema:schema11.properties.cache_threshold.oneOf,parentSchema:schema11.properties.cache_threshold,data:s};null===p?p=[e]:p.push(e),n++}}}else{const s={instancePath:t,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object",schema:schema11.type,parentSchema:schema11,data:e};null===p?p=[s]:p.push(s),n++}return validate10.errors=p,0===n}export const validateMimeTypes_=validate11;const schema12={$schema:"http://json-schema.org/draft-07/schema#",$id:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimes.schema.json",title:"MimeTypes",description:"File type configs for the different accepted mime types",type:"object",definitions:{"?MimeTypeConfig":{oneOf:[{type:"null"},{$ref:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json"}]}},patternProperties:{"^[a-z]+/[a-z0-9.+-]+$":{$ref:"#/definitions/?MimeTypeConfig"}},additionalProperties:!1},pattern3=new RegExp("^[a-z]+/[a-z0-9.+-]+$","u"),schema13={oneOf:[{type:"null"},{$ref:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json"}]};function validate12(e,{instancePath:t="",parentData:s,parentDataProperty:a,rootData:r=e}={}){let p=null,n=0;const i=n;let o=!1,h=null;const c=n;if(null!==e){const s={instancePath:t,schemaPath:"#/oneOf/0/type",keyword:"type",params:{type:"null"},message:"must be null",schema:schema13.oneOf[0].type,parentSchema:schema13.oneOf[0],data:e};null===p?p=[s]:p.push(s),n++}(u=c===n)&&(o=!0,h=0);const m=n;if(e&&"object"==typeof e&&!Array.isArray(e)){if(void 0===e.suffixes){const s={instancePath:t,schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/required",keyword:"required",params:{missingProperty:"suffixes"},message:"must have required property 'suffixes'",schema:schema11.required,parentSchema:schema11,data:e};null===p?p=[s]:p.push(s),n++}if(void 0===e.compress){const s={instancePath:t,schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/required",keyword:"required",params:{missingProperty:"compress"},message:"must have required property 'compress'",schema:schema11.required,parentSchema:schema11,data:e};null===p?p=[s]:p.push(s),n++}if(void 0===e.cache_threshold){const s={instancePath:t,schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/required",keyword:"required",params:{missingProperty:"cache_threshold"},message:"must have required property 'cache_threshold'",schema:schema11.required,parentSchema:schema11,data:e};null===p?p=[s]:p.push(s),n++}for(const s in e)if("suffixes"!==s&&"headers"!==s&&"compress"!==s&&"cache_threshold"!==s){const a={instancePath:t,schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:s},message:"must NOT have additional properties",schema:!1,parentSchema:schema11,data:e};null===p?p=[a]:p.push(a),n++}if(void 0!==e.suffixes){let s=e.suffixes;if(Array.isArray(s)){if(s.length<1){const e={instancePath:t+"/suffixes",schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/suffixes/minItems",keyword:"minItems",params:{limit:1},message:"must NOT have fewer than 1 items",schema:1,parentSchema:schema11.properties.suffixes,data:s};null===p?p=[e]:p.push(e),n++}const e=s.length;for(let a=0;a<e;a++){let e=s[a];if("string"!=typeof e){const s={instancePath:t+"/suffixes/"+a,schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/suffixes/items/type",keyword:"type",params:{type:"string"},message:"must be string",schema:schema11.properties.suffixes.items.type,parentSchema:schema11.properties.suffixes.items,data:e};null===p?p=[s]:p.push(s),n++}}let a,r=s.length;if(r>1){const e={};for(;r--;){let i=s[r];if("string"==typeof i){if("number"==typeof e[i]){const o={instancePath:t+"/suffixes",schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/suffixes/uniqueItems",keyword:"uniqueItems",params:{i:r,j:a=e[i]},message:"must NOT have duplicate items (items ## "+a+" and "+r+" are identical)",schema:!0,parentSchema:schema11.properties.suffixes,data:s};null===p?p=[o]:p.push(o),n++;break}e[i]=r}}}}else{const e={instancePath:t+"/suffixes",schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/suffixes/type",keyword:"type",params:{type:"array"},message:"must be array",schema:schema11.properties.suffixes.type,parentSchema:schema11.properties.suffixes,data:s};null===p?p=[e]:p.push(e),n++}}if(void 0!==e.headers){let s=e.headers;if(s&&"object"==typeof s&&!Array.isArray(s)){for(const e in s)if(!pattern0.test(e)){const a={instancePath:t+"/headers",schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/headers/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:e},message:"must NOT have additional properties",schema:!1,parentSchema:schema11.properties.headers,data:s};null===p?p=[a]:p.push(a),n++}for(const e in s)if(pattern0.test(e)){let a=s[e];const r=n;let i=!1,o=null;const h=n;if("string"!=typeof a){const s={instancePath:t+"/headers/"+e.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/headers/patternProperties/%5E%5Ba-zA-Z0-9-_%5D%2B%24/oneOf/0/type",keyword:"type",params:{type:"string"},message:"must be string",schema:schema11.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[0].type,parentSchema:schema11.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[0],data:a};null===p?p=[s]:p.push(s),n++}(d=h===n)&&(i=!0,o=0);const c=n;if(null!==a){const s={instancePath:t+"/headers/"+e.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/headers/patternProperties/%5E%5Ba-zA-Z0-9-_%5D%2B%24/oneOf/1/type",keyword:"type",params:{type:"null"},message:"must be null",schema:schema11.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[1].type,parentSchema:schema11.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[1],data:a};null===p?p=[s]:p.push(s),n++}var d;if((d=c===n)&&i?(i=!1,o=[o,1]):d&&(i=!0,o=1),i)n=r,null!==p&&(r?p.length=r:p=null);else{const s={instancePath:t+"/headers/"+e.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/headers/patternProperties/%5E%5Ba-zA-Z0-9-_%5D%2B%24/oneOf",keyword:"oneOf",params:{passingSchemas:o},message:"must match exactly one schema in oneOf",schema:schema11.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf,parentSchema:schema11.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"],data:a};null===p?p=[s]:p.push(s),n++}}}else{const e={instancePath:t+"/headers",schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/headers/type",keyword:"type",params:{type:"object"},message:"must be object",schema:schema11.properties.headers.type,parentSchema:schema11.properties.headers,data:s};null===p?p=[e]:p.push(e),n++}}if(void 0!==e.compress){let s=e.compress;if("boolean"!=typeof s){const e={instancePath:t+"/compress",schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/compress/type",keyword:"type",params:{type:"boolean"},message:"must be boolean",schema:schema11.properties.compress.type,parentSchema:schema11.properties.compress,data:s};null===p?p=[e]:p.push(e),n++}}if(void 0!==e.cache_threshold){let s=e.cache_threshold;const a=n;let r=!1,i=null;const o=n;if("number"==typeof s&&isFinite(s)){if(s<0||isNaN(s)){const e={instancePath:t+"/cache_threshold",schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/cache_threshold/oneOf/0/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0",schema:0,parentSchema:schema11.properties.cache_threshold.oneOf[0],data:s};null===p?p=[e]:p.push(e),n++}}else{const e={instancePath:t+"/cache_threshold",schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/cache_threshold/oneOf/0/type",keyword:"type",params:{type:"number"},message:"must be number",schema:schema11.properties.cache_threshold.oneOf[0].type,parentSchema:schema11.properties.cache_threshold.oneOf[0],data:s};null===p?p=[e]:p.push(e),n++}(l=o===n)&&(r=!0,i=0);const h=n;if(null!==s){const e={instancePath:t+"/cache_threshold",schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/cache_threshold/oneOf/1/type",keyword:"type",params:{type:"null"},message:"must be null",schema:schema11.properties.cache_threshold.oneOf[1].type,parentSchema:schema11.properties.cache_threshold.oneOf[1],data:s};null===p?p=[e]:p.push(e),n++}if((l=h===n)&&r)r=!1,i=[i,1];else{l&&(r=!0,i=1);const e=n;if("string"==typeof s){if(!pattern2.test(s)){const e={instancePath:t+"/cache_threshold",schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/cache_threshold/oneOf/2/pattern",keyword:"pattern",params:{pattern:"^[0-9]+[.]?[0.9]*[km]?b$"},message:'must match pattern "^[0-9]+[.]?[0.9]*[km]?b$"',schema:"^[0-9]+[.]?[0.9]*[km]?b$",parentSchema:schema11.properties.cache_threshold.oneOf[2],data:s};null===p?p=[e]:p.push(e),n++}}else{const e={instancePath:t+"/cache_threshold",schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/cache_threshold/oneOf/2/type",keyword:"type",params:{type:"string"},message:"must be string",schema:schema11.properties.cache_threshold.oneOf[2].type,parentSchema:schema11.properties.cache_threshold.oneOf[2],data:s};null===p?p=[e]:p.push(e),n++}var l;(l=e===n)&&r?(r=!1,i=[i,2]):l&&(r=!0,i=2)}if(r)n=a,null!==p&&(a?p.length=a:p=null);else{const e={instancePath:t+"/cache_threshold",schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/properties/cache_threshold/oneOf",keyword:"oneOf",params:{passingSchemas:i},message:"must match exactly one schema in oneOf",schema:schema11.properties.cache_threshold.oneOf,parentSchema:schema11.properties.cache_threshold,data:s};null===p?p=[e]:p.push(e),n++}}}else{const s={instancePath:t,schemaPath:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimetype.schema.json/type",keyword:"type",params:{type:"object"},message:"must be object",schema:schema11.type,parentSchema:schema11,data:e};null===p?p=[s]:p.push(s),n++}var u;if((u=m===n)&&o?(o=!1,h=[h,1]):u&&(o=!0,h=1),o)n=i,null!==p&&(i?p.length=i:p=null);else{const s={instancePath:t,schemaPath:"#/oneOf",keyword:"oneOf",params:{passingSchemas:h},message:"must match exactly one schema in oneOf",schema:schema13.oneOf,parentSchema:schema13,data:e};null===p?p=[s]:p.push(s),n++}return validate12.errors=p,0===n}function validate11(e,{instancePath:t="",parentData:s,parentDataProperty:a,rootData:r=e}={}){let p=null,n=0;if(e&&"object"==typeof e&&!Array.isArray(e)){for(const s in e)if(!pattern3.test(s)){const a={instancePath:t,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:s},message:"must NOT have additional properties",schema:!1,parentSchema:schema12,data:e};null===p?p=[a]:p.push(a),n++}for(const s in e)pattern3.test(s)&&(validate12(e[s],{instancePath:t+"/"+s.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:e,parentDataProperty:s,rootData:r})||(n=(p=null===p?validate12.errors:p.concat(validate12.errors)).length))}else{const s={instancePath:t,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object",schema:schema12.type,parentSchema:schema12,data:e};null===p?p=[s]:p.push(s),n++}return validate11.errors=p,0===n}export const validateDirectoryConfig_=validate14;const schema15={$schema:"http://json-schema.org/draft-07/schema#",$id:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/directory.schema.json",title:"DirectoryConfig",description:"File type configs for the different accepted mime types",type:"object",properties:{domains:{description:"The list of domains.",type:"array",items:{type:"string",pattern:"^.{1,61}[.].{2,24}$"},minItems:1,uniqueItems:!0},headers:{description:"Custom headers for all file types",type:"object",patternProperties:{"^[a-zA-Z0-9-_]+$":{oneOf:[{type:"string"},{type:"null"}]}},additionalProperties:!1},endpoints:{description:"List of modules implementing custom endpoints",type:"array",items:{type:"string",pattern:"^[a-zA-Z0-9._-]+[.]mjs$"},uniqueItems:!0},static:{type:"object",properties:{domain:{description:"The domain to use for static files.",type:"string",pattern:"^.{1,61}[.].{2,24}$"},headers:{description:"Custom headers for all file types",type:"object",patternProperties:{"^[a-zA-Z0-9-_]+$":{oneOf:[{type:"string"},{type:"null"}]}},additionalProperties:!1},path:{description:"Path under which the files will be served.",type:"string",minLength:1,default:"/",pattern:"^/[a-zA-Z0-9-._~!$&'()*+,;=:@/]+$"},excludes:{description:"List of relative paths to exclude.",type:"array",items:{type:"string"}},mime_types:{description:"File types config",$ref:"https://raw.githubusercontent.com/programingjd/deno_http1_server/main/mimes.schema.json"}},additionalProperties:!1}},required:["domains"],additionalProperties:!1},pattern8=new RegExp("^.{1,61}[.].{2,24}$","u"),pattern11=new RegExp("^[a-zA-Z0-9._-]+[.]mjs$","u"),pattern15=new RegExp("^/[a-zA-Z0-9-._~!$&'()*+,;=:@/]+$","u"),func4=ucs2length;function validate14(e,{instancePath:t="",parentData:s,parentDataProperty:a,rootData:r=e}={}){let p=null,n=0;if(e&&"object"==typeof e&&!Array.isArray(e)){if(void 0===e.domains){const s={instancePath:t,schemaPath:"#/required",keyword:"required",params:{missingProperty:"domains"},message:"must have required property 'domains'",schema:schema15.required,parentSchema:schema15,data:e};null===p?p=[s]:p.push(s),n++}for(const s in e)if("domains"!==s&&"headers"!==s&&"endpoints"!==s&&"static"!==s){const a={instancePath:t,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:s},message:"must NOT have additional properties",schema:!1,parentSchema:schema15,data:e};null===p?p=[a]:p.push(a),n++}if(void 0!==e.domains){let s=e.domains;if(Array.isArray(s)){if(s.length<1){const e={instancePath:t+"/domains",schemaPath:"#/properties/domains/minItems",keyword:"minItems",params:{limit:1},message:"must NOT have fewer than 1 items",schema:1,parentSchema:schema15.properties.domains,data:s};null===p?p=[e]:p.push(e),n++}const e=s.length;for(let a=0;a<e;a++){let e=s[a];if("string"==typeof e){if(!pattern8.test(e)){const s={instancePath:t+"/domains/"+a,schemaPath:"#/properties/domains/items/pattern",keyword:"pattern",params:{pattern:"^.{1,61}[.].{2,24}$"},message:'must match pattern "^.{1,61}[.].{2,24}$"',schema:"^.{1,61}[.].{2,24}$",parentSchema:schema15.properties.domains.items,data:e};null===p?p=[s]:p.push(s),n++}}else{const s={instancePath:t+"/domains/"+a,schemaPath:"#/properties/domains/items/type",keyword:"type",params:{type:"string"},message:"must be string",schema:schema15.properties.domains.items.type,parentSchema:schema15.properties.domains.items,data:e};null===p?p=[s]:p.push(s),n++}}let a,r=s.length;if(r>1){const e={};for(;r--;){let i=s[r];if("string"==typeof i){if("number"==typeof e[i]){const o={instancePath:t+"/domains",schemaPath:"#/properties/domains/uniqueItems",keyword:"uniqueItems",params:{i:r,j:a=e[i]},message:"must NOT have duplicate items (items ## "+a+" and "+r+" are identical)",schema:!0,parentSchema:schema15.properties.domains,data:s};null===p?p=[o]:p.push(o),n++;break}e[i]=r}}}}else{const e={instancePath:t+"/domains",schemaPath:"#/properties/domains/type",keyword:"type",params:{type:"array"},message:"must be array",schema:schema15.properties.domains.type,parentSchema:schema15.properties.domains,data:s};null===p?p=[e]:p.push(e),n++}}if(void 0!==e.headers){let s=e.headers;if(s&&"object"==typeof s&&!Array.isArray(s)){for(const e in s)if(!pattern0.test(e)){const a={instancePath:t+"/headers",schemaPath:"#/properties/headers/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:e},message:"must NOT have additional properties",schema:!1,parentSchema:schema15.properties.headers,data:s};null===p?p=[a]:p.push(a),n++}for(const e in s)if(pattern0.test(e)){let a=s[e];const r=n;let o=!1,h=null;const c=n;if("string"!=typeof a){const s={instancePath:t+"/headers/"+e.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/properties/headers/patternProperties/%5E%5Ba-zA-Z0-9-_%5D%2B%24/oneOf/0/type",keyword:"type",params:{type:"string"},message:"must be string",schema:schema15.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[0].type,parentSchema:schema15.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[0],data:a};null===p?p=[s]:p.push(s),n++}(i=c===n)&&(o=!0,h=0);const m=n;if(null!==a){const s={instancePath:t+"/headers/"+e.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/properties/headers/patternProperties/%5E%5Ba-zA-Z0-9-_%5D%2B%24/oneOf/1/type",keyword:"type",params:{type:"null"},message:"must be null",schema:schema15.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[1].type,parentSchema:schema15.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[1],data:a};null===p?p=[s]:p.push(s),n++}var i;if((i=m===n)&&o?(o=!1,h=[h,1]):i&&(o=!0,h=1),o)n=r,null!==p&&(r?p.length=r:p=null);else{const s={instancePath:t+"/headers/"+e.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/properties/headers/patternProperties/%5E%5Ba-zA-Z0-9-_%5D%2B%24/oneOf",keyword:"oneOf",params:{passingSchemas:h},message:"must match exactly one schema in oneOf",schema:schema15.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf,parentSchema:schema15.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"],data:a};null===p?p=[s]:p.push(s),n++}}}else{const e={instancePath:t+"/headers",schemaPath:"#/properties/headers/type",keyword:"type",params:{type:"object"},message:"must be object",schema:schema15.properties.headers.type,parentSchema:schema15.properties.headers,data:s};null===p?p=[e]:p.push(e),n++}}if(void 0!==e.endpoints){let s=e.endpoints;if(Array.isArray(s)){const e=s.length;for(let a=0;a<e;a++){let e=s[a];if("string"==typeof e){if(!pattern11.test(e)){const s={instancePath:t+"/endpoints/"+a,schemaPath:"#/properties/endpoints/items/pattern",keyword:"pattern",params:{pattern:"^[a-zA-Z0-9._-]+[.]mjs$"},message:'must match pattern "^[a-zA-Z0-9._-]+[.]mjs$"',schema:"^[a-zA-Z0-9._-]+[.]mjs$",parentSchema:schema15.properties.endpoints.items,data:e};null===p?p=[s]:p.push(s),n++}}else{const s={instancePath:t+"/endpoints/"+a,schemaPath:"#/properties/endpoints/items/type",keyword:"type",params:{type:"string"},message:"must be string",schema:schema15.properties.endpoints.items.type,parentSchema:schema15.properties.endpoints.items,data:e};null===p?p=[s]:p.push(s),n++}}let a,r=s.length;if(r>1){const e={};for(;r--;){let i=s[r];if("string"==typeof i){if("number"==typeof e[i]){const o={instancePath:t+"/endpoints",schemaPath:"#/properties/endpoints/uniqueItems",keyword:"uniqueItems",params:{i:r,j:a=e[i]},message:"must NOT have duplicate items (items ## "+a+" and "+r+" are identical)",schema:!0,parentSchema:schema15.properties.endpoints,data:s};null===p?p=[o]:p.push(o),n++;break}e[i]=r}}}}else{const e={instancePath:t+"/endpoints",schemaPath:"#/properties/endpoints/type",keyword:"type",params:{type:"array"},message:"must be array",schema:schema15.properties.endpoints.type,parentSchema:schema15.properties.endpoints,data:s};null===p?p=[e]:p.push(e),n++}}if(void 0!==e.static){let s=e.static;if(s&&"object"==typeof s&&!Array.isArray(s)){for(const e in s)if("domain"!==e&&"headers"!==e&&"path"!==e&&"excludes"!==e&&"mime_types"!==e){const a={instancePath:t+"/static",schemaPath:"#/properties/static/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:e},message:"must NOT have additional properties",schema:!1,parentSchema:schema15.properties.static,data:s};null===p?p=[a]:p.push(a),n++}if(void 0!==s.domain){let e=s.domain;if("string"==typeof e){if(!pattern8.test(e)){const s={instancePath:t+"/static/domain",schemaPath:"#/properties/static/properties/domain/pattern",keyword:"pattern",params:{pattern:"^.{1,61}[.].{2,24}$"},message:'must match pattern "^.{1,61}[.].{2,24}$"',schema:"^.{1,61}[.].{2,24}$",parentSchema:schema15.properties.static.properties.domain,data:e};null===p?p=[s]:p.push(s),n++}}else{const s={instancePath:t+"/static/domain",schemaPath:"#/properties/static/properties/domain/type",keyword:"type",params:{type:"string"},message:"must be string",schema:schema15.properties.static.properties.domain.type,parentSchema:schema15.properties.static.properties.domain,data:e};null===p?p=[s]:p.push(s),n++}}if(void 0!==s.headers){let e=s.headers;if(e&&"object"==typeof e&&!Array.isArray(e)){for(const s in e)if(!pattern0.test(s)){const a={instancePath:t+"/static/headers",schemaPath:"#/properties/static/properties/headers/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:s},message:"must NOT have additional properties",schema:!1,parentSchema:schema15.properties.static.properties.headers,data:e};null===p?p=[a]:p.push(a),n++}for(const s in e)if(pattern0.test(s)){let a=e[s];const r=n;let i=!1,h=null;const c=n;if("string"!=typeof a){const e={instancePath:t+"/static/headers/"+s.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/properties/static/properties/headers/patternProperties/%5E%5Ba-zA-Z0-9-_%5D%2B%24/oneOf/0/type",keyword:"type",params:{type:"string"},message:"must be string",schema:schema15.properties.static.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[0].type,parentSchema:schema15.properties.static.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[0],data:a};null===p?p=[e]:p.push(e),n++}(o=c===n)&&(i=!0,h=0);const m=n;if(null!==a){const e={instancePath:t+"/static/headers/"+s.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/properties/static/properties/headers/patternProperties/%5E%5Ba-zA-Z0-9-_%5D%2B%24/oneOf/1/type",keyword:"type",params:{type:"null"},message:"must be null",schema:schema15.properties.static.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[1].type,parentSchema:schema15.properties.static.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf[1],data:a};null===p?p=[e]:p.push(e),n++}var o;if((o=m===n)&&i?(i=!1,h=[h,1]):o&&(i=!0,h=1),i)n=r,null!==p&&(r?p.length=r:p=null);else{const e={instancePath:t+"/static/headers/"+s.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/properties/static/properties/headers/patternProperties/%5E%5Ba-zA-Z0-9-_%5D%2B%24/oneOf",keyword:"oneOf",params:{passingSchemas:h},message:"must match exactly one schema in oneOf",schema:schema15.properties.static.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"].oneOf,parentSchema:schema15.properties.static.properties.headers.patternProperties["^[a-zA-Z0-9-_]+$"],data:a};null===p?p=[e]:p.push(e),n++}}}else{const s={instancePath:t+"/static/headers",schemaPath:"#/properties/static/properties/headers/type",keyword:"type",params:{type:"object"},message:"must be object",schema:schema15.properties.static.properties.headers.type,parentSchema:schema15.properties.static.properties.headers,data:e};null===p?p=[s]:p.push(s),n++}}if(void 0!==s.path){let e=s.path;if("string"==typeof e){if(func4(e)<1){const s={instancePath:t+"/static/path",schemaPath:"#/properties/static/properties/path/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",schema:1,parentSchema:schema15.properties.static.properties.path,data:e};null===p?p=[s]:p.push(s),n++}if(!pattern15.test(e)){const s={instancePath:t+"/static/path",schemaPath:"#/properties/static/properties/path/pattern",keyword:"pattern",params:{pattern:"^/[a-zA-Z0-9-._~!$&'()*+,;=:@/]+$"},message:'must match pattern "^/[a-zA-Z0-9-._~!$&\'()*+,;=:@/]+$"',schema:"^/[a-zA-Z0-9-._~!$&'()*+,;=:@/]+$",parentSchema:schema15.properties.static.properties.path,data:e};null===p?p=[s]:p.push(s),n++}}else{const s={instancePath:t+"/static/path",schemaPath:"#/properties/static/properties/path/type",keyword:"type",params:{type:"string"},message:"must be string",schema:schema15.properties.static.properties.path.type,parentSchema:schema15.properties.static.properties.path,data:e};null===p?p=[s]:p.push(s),n++}}if(void 0!==s.excludes){let e=s.excludes;if(Array.isArray(e)){const s=e.length;for(let a=0;a<s;a++){let s=e[a];if("string"!=typeof s){const e={instancePath:t+"/static/excludes/"+a,schemaPath:"#/properties/static/properties/excludes/items/type",keyword:"type",params:{type:"string"},message:"must be string",schema:schema15.properties.static.properties.excludes.items.type,parentSchema:schema15.properties.static.properties.excludes.items,data:s};null===p?p=[e]:p.push(e),n++}}}else{const s={instancePath:t+"/static/excludes",schemaPath:"#/properties/static/properties/excludes/type",keyword:"type",params:{type:"array"},message:"must be array",schema:schema15.properties.static.properties.excludes.type,parentSchema:schema15.properties.static.properties.excludes,data:e};null===p?p=[s]:p.push(s),n++}}void 0!==s.mime_types&&(validate11(s.mime_types,{instancePath:t+"/static/mime_types",parentData:s,parentDataProperty:"mime_types",rootData:r})||(n=(p=null===p?validate11.errors:p.concat(validate11.errors)).length))}else{const e={instancePath:t+"/static",schemaPath:"#/properties/static/type",keyword:"type",params:{type:"object"},message:"must be object",schema:schema15.properties.static.type,parentSchema:schema15.properties.static,data:s};null===p?p=[e]:p.push(e),n++}}}else{const s={instancePath:t,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object",schema:schema15.type,parentSchema:schema15,data:e};null===p?p=[s]:p.push(s),n++}return validate14.errors=p,0===n}
