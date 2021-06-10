interface IDonationsClientTheme {
    PAGE_BG: string;
    PAGE_HEADER: string;
    CARD_BG: string;
    CARD_TEXT_PRIMARY: string;
    CARD_TEXT_SECONDARY: string;
    CARD_ACCENT_1: string;
    CARD_ACCENT_2: string;
    BUTTON_PRIMARY: string;
    BUTTON_PRIMARY_TEXT: string;
    FORM_LABEL: string;
}

const defaultPalette = {
    VIOLET: '#b715e4',
    LIGHT_1_VIOLET: '#d573f1',
    DARK_1_VIOLET: '#830fa3',
    BLACK: '#110212',
    LIGHT_GREY: '#F0F0F0',
    WHITEISH: '#FCFCFC'
}

export const defaultTheme : IDonationsClientTheme = {
    PAGE_BG: defaultPalette.WHITEISH,
    PAGE_HEADER: defaultPalette.DARK_1_VIOLET,
    CARD_BG: defaultPalette.WHITEISH,
    CARD_ACCENT_1: defaultPalette.LIGHT_GREY,
    CARD_ACCENT_2: defaultPalette.VIOLET,
    CARD_TEXT_PRIMARY: defaultPalette.BLACK,
    CARD_TEXT_SECONDARY: defaultPalette.VIOLET,
    BUTTON_PRIMARY: defaultPalette.DARK_1_VIOLET,
    BUTTON_PRIMARY_TEXT: defaultPalette.WHITEISH,
    FORM_LABEL: defaultPalette.DARK_1_VIOLET
}