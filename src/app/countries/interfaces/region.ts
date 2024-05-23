export interface Region {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc?:        string;
    independent:  boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   { [key: string]: Currency };
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       RegionElement;
    subregion:    Subregion;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa:         string;
    car:          Car;
    timezones:    string[];
    continents:   RegionElement[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum RegionElement {
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export interface Currency {
    name:   string;
    symbol: string;
}

export interface Demonyms {
    eng: Eng;
    fra: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    lao?: string;
    hye?: string;
    ara?: Ara;
    fra?: string;
    msa?: string;
    dzo?: string;
    aze?: string;
    eng?: string;
    hin?: string;
    tam?: string;
    zho?: string;
    mon?: string;
    mya?: string;
    urd?: string;
    kor?: string;
    ben?: string;
    sin?: string;
    rus?: string;
    uzb?: string;
    tgk?: string;
    por?: string;
    tet?: string;
    tha?: string;
    div?: string;
    nep?: string;
    ind?: string;
    vie?: string;
    fas?: string;
    tur?: string;
    kat?: string;
    fil?: string;
    arc?: string;
    ckb?: string;
    prs?: string;
    pus?: string;
    tuk?: string;
    heb?: string;
    khm?: string;
    jpn?: string;
    kaz?: string;
    kir?: string;
}

export enum Ara {
    Arabic = "Arabic",
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
}

export enum Subregion {
    CentralAsia = "Central Asia",
    EasternAsia = "Eastern Asia",
    SouthEasternAsia = "South-Eastern Asia",
    SouthernAsia = "Southern Asia",
    WesternAsia = "Western Asia",
}
