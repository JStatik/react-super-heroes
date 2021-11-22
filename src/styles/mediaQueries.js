const device = {
    xxsmallMin:     (styles) => `@media (min-width: 320px)  { ${ styles } }`,
    xsmallMin:      (styles) => `@media (min-width: 375px)  { ${ styles } }`,
    smallMin:       (styles) => `@media (min-width: 425px)  { ${ styles } }`,
    mediumMin:      (styles) => `@media (min-width: 768px)  { ${ styles } }`,
    largeMin:       (styles) => `@media (min-width: 1024px) { ${ styles } }`,
    xlargeMin:      (styles) => `@media (min-width: 1440px) { ${ styles } }`,
    xxlargeMin:     (styles) => `@media (min-width: 2560px) { ${ styles } }`,

    xxsmallMax:     (styles) => `@media (max-width: 320px)  { ${ styles } }`,
    xsmallMax:      (styles) => `@media (max-width: 375px)  { ${ styles } }`,
    smallMax:       (styles) => `@media (max-width: 425px)  { ${ styles } }`,
    mediumMax:      (styles) => `@media (max-width: 768px)  { ${ styles } }`,
    largeMax:       (styles) => `@media (max-width: 1024px) { ${ styles } }`,
    xlargeMax:      (styles) => `@media (max-width: 1440px) { ${ styles } }`,
    xxlargeMax:     (styles) => `@media (max-width: 2560px) { ${ styles } }`
};

export default device;
