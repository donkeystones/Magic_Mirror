//Weather icons taken from https://reactsvgicons.com/weather-icons

export interface IconProps {
    width: string;
    height: string;
}

export const WiDaySunny = (props: IconProps) => {
    return (
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          {...props}
        >
          <path d="M4.37 14.62c0-.24.08-.45.25-.62.17-.16.38-.24.6-.24h2.04c.23 0 .42.08.58.25.15.17.23.37.23.61s-.07.44-.22.61c-.15.17-.35.25-.58.25H5.23c-.23 0-.43-.08-.6-.25a.832.832 0 01-.26-.61zm2.86 6.93c0-.23.08-.43.23-.61l1.47-1.43c.15-.16.35-.23.59-.23s.44.08.6.23.24.34.24.57c0 .24-.08.46-.24.64L8.7 22.14c-.41.32-.82.32-1.23 0a.807.807 0 01-.24-.59zm0-13.84c0-.23.08-.43.23-.61.2-.17.41-.25.64-.25.22 0 .42.08.59.24l1.43 1.47c.16.15.24.35.24.59s-.08.44-.24.6-.36.24-.6.24-.44-.08-.59-.24L7.47 8.32a.837.837 0 01-.24-.61zm2.55 6.91c0-.93.23-1.8.7-2.6s1.1-1.44 1.91-1.91 1.67-.7 2.6-.7c.7 0 1.37.14 2.02.42.64.28 1.2.65 1.66 1.12.47.47.84 1.02 1.11 1.66.27.64.41 1.32.41 2.02 0 .94-.23 1.81-.7 2.61-.47.8-1.1 1.43-1.9 1.9-.8.47-1.67.7-2.61.7s-1.81-.23-2.61-.7c-.8-.47-1.43-1.1-1.9-1.9-.45-.81-.69-1.68-.69-2.62zm1.7 0c0 .98.34 1.81 1.03 2.5.68.69 1.51 1.04 2.49 1.04s1.81-.35 2.5-1.04 1.04-1.52 1.04-2.5c0-.96-.35-1.78-1.04-2.47-.69-.68-1.52-1.02-2.5-1.02-.97 0-1.8.34-2.48 1.02-.7.69-1.04 1.51-1.04 2.47zm2.66 7.78c0-.24.08-.44.25-.6s.37-.24.6-.24c.24 0 .45.08.61.24s.24.36.24.6v1.99c0 .24-.08.45-.25.62-.17.17-.37.25-.6.25s-.44-.08-.6-.25a.845.845 0 01-.25-.62V22.4zm0-15.5V4.86c0-.23.08-.43.25-.6.17-.17.37-.26.61-.26s.43.08.6.25c.17.17.25.37.25.6V6.9c0 .23-.08.42-.25.58s-.37.23-.6.23-.44-.08-.6-.23-.26-.35-.26-.58zm5.52 13.18c0-.23.08-.42.23-.56.15-.16.34-.23.56-.23.24 0 .44.08.6.23l1.46 1.43c.16.17.24.38.24.61 0 .23-.08.43-.24.59-.4.31-.8.31-1.2 0l-1.42-1.42a.974.974 0 01-.23-.65zm0-10.92c0-.25.08-.45.23-.59l1.42-1.47a.84.84 0 01.59-.24c.24 0 .44.08.6.25.17.17.25.37.25.6 0 .25-.08.46-.24.62l-1.46 1.43c-.18.16-.38.24-.6.24-.23 0-.41-.08-.56-.24s-.23-.36-.23-.6zm2.26 5.46c0-.24.08-.44.24-.62.16-.16.35-.24.57-.24h2.02c.23 0 .43.09.6.26.17.17.26.37.26.6s-.09.43-.26.6c-.17.17-.37.25-.6.25h-2.02c-.23 0-.43-.08-.58-.25s-.23-.36-.23-.6z" />
        </svg>
      );
}

export const WiDayCloudyHigh = (props: IconProps) => {
    return (
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          {...props}
        >
          <path d="M3.95 13.05c0-.93.29-1.75.87-2.48s1.31-1.2 2.19-1.4c.26-1.1.82-2 1.7-2.71s1.88-1.06 3.01-1.06c1.1 0 2.08.35 2.95 1.04s1.43 1.57 1.68 2.65h.26c1.1 0 2.04.39 2.82 1.16.78.77 1.17 1.71 1.17 2.81v.1c.75.8 1.12 1.75 1.12 2.85 0 .76-.19 1.46-.57 2.1-.38.65-.89 1.16-1.53 1.53-.64.38-1.34.56-2.09.56-.96 0-1.82-.3-2.56-.89s-1.24-1.35-1.48-2.26h-5.7c-1.07-.05-1.98-.46-2.72-1.23s-1.12-1.7-1.12-2.77zm1.36 0c0 .7.24 1.31.73 1.82s1.07.79 1.75.82h8.99c.68-.03 1.27-.3 1.75-.82.49-.52.73-1.12.73-1.82 0-.71-.26-1.32-.79-1.83-.53-.52-1.14-.77-1.86-.77h-1.29c-.09 0-.14-.05-.14-.14l-.07-.47c-.09-.87-.46-1.6-1.12-2.19s-1.42-.89-2.28-.89c-.89 0-1.66.29-2.31.88s-1 1.32-1.09 2.19l-.06.47c0 .09-.05.14-.16.14h-.4c-.67.08-1.24.36-1.69.86a2.48 2.48 0 00-.69 1.75zm6.2 9.01c-.25-.33-.25-.65 0-.98l1.13-1.15c.14-.12.31-.18.52-.18.19 0 .34.06.46.18s.18.28.18.47c0 .2-.06.36-.18.48l-1.14 1.18a.68.68 0 01-.49.19c-.2 0-.36-.07-.48-.19zm3.39-5.02c.21.54.56.97 1.04 1.3.48.33 1.01.5 1.6.5.77 0 1.43-.28 1.97-.83a2.8 2.8 0 00.81-2.02c0-.39-.06-.74-.19-1.05-.33.61-.8 1.11-1.39 1.49-.6.38-1.25.58-1.96.61H14.9zm1.95 5.19c0-.19.07-.34.2-.47.13-.12.3-.19.48-.19s.35.07.5.21c.12.12.19.27.19.45v1.64c0 .19-.07.35-.2.49s-.3.21-.48.21-.35-.07-.48-.21c-.13-.14-.2-.3-.2-.49v-1.64zm4.41-1.83c0-.18.06-.33.19-.46.13-.12.29-.19.47-.19.19 0 .35.06.47.18l1.18 1.15c.13.14.2.3.2.48 0 .19-.07.35-.2.48s-.3.2-.49.2c-.21 0-.37-.06-.5-.19l-1.13-1.18a.674.674 0 01-.19-.47zm0-8.81c0-.19.06-.35.19-.47l1.13-1.18c.14-.12.3-.19.5-.19.19 0 .35.06.5.19.13.15.2.32.2.51 0 .18-.07.33-.2.48l-1.18 1.15c-.12.12-.28.19-.47.19s-.35-.06-.47-.19c-.14-.14-.2-.3-.2-.49zm1.82 4.4c0-.19.06-.35.19-.48.12-.13.28-.2.47-.2h1.62c.19 0 .36.07.5.2s.21.29.21.48-.07.36-.21.49c-.14.13-.3.2-.5.2h-1.62c-.19 0-.34-.07-.47-.2a.655.655 0 01-.19-.49z" />
        </svg>
      );
}

export const WiCloud = (props: IconProps) => {
    return (
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          {...props}
        >
          <path d="M4.61 16.88c0-1.15.36-2.17 1.08-3.07.72-.9 1.63-1.48 2.74-1.73.31-1.37 1.02-2.49 2.11-3.37s2.35-1.32 3.76-1.32c1.38 0 2.61.43 3.69 1.28s1.78 1.95 2.1 3.29h.33c.9 0 1.73.22 2.49.65s1.37 1.03 1.81 1.79c.44.76.67 1.58.67 2.48a4.94 4.94 0 01-2.36 4.25c-.73.45-1.54.69-2.41.72H9.41c-1.34-.06-2.47-.57-3.4-1.53-.93-.95-1.4-2.1-1.4-3.44zm1.71 0c0 .87.3 1.62.9 2.26s1.33.98 2.19 1.03H20.6c.86-.04 1.59-.39 2.19-1.03.61-.64.91-1.4.91-2.26 0-.88-.33-1.63-.98-2.27-.65-.64-1.42-.96-2.32-.96h-1.6c-.11 0-.17-.06-.17-.18l-.07-.57c-.11-1.08-.58-1.99-1.4-2.72-.82-.73-1.77-1.1-2.86-1.1-1.09 0-2.05.37-2.85 1.1-.81.73-1.27 1.64-1.37 2.72l-.08.57c0 .12-.07.18-.2.18h-.53c-.84.1-1.54.46-2.1 1.07s-.85 1.33-.85 2.16z" />
        </svg>
      );
}

export const WiFog = (props: IconProps) => {
    return (
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          {...props}
        >
          <path d="M2.62 21.05c0-.24.08-.45.25-.61.17-.16.38-.24.63-.24h18.67a.821.821 0 01.85.85c0 .23-.08.43-.25.58-.17.16-.37.23-.6.23H3.5c-.25 0-.46-.08-.63-.23a.758.758 0 01-.25-.58zm2.62-3.14c0-.24.09-.44.26-.6.15-.15.35-.23.59-.23h18.67c.23 0 .42.08.58.24.16.16.23.35.23.59s-.08.44-.23.6c-.16.17-.35.25-.58.25H6.09c-.24 0-.44-.08-.6-.25a.816.816 0 01-.25-.6zm.13-2.39c0 .09.05.13.15.13h1.43c.06 0 .13-.05.2-.16.24-.52.59-.94 1.06-1.27.47-.33.99-.52 1.55-.56l.55-.07c.11 0 .17-.06.17-.18l.07-.5c.11-1.08.56-1.98 1.37-2.7.81-.72 1.76-1.08 2.85-1.08 1.08 0 2.02.36 2.83 1.07.8.71 1.26 1.61 1.37 2.68l.08.57c0 .11.07.17.2.17h1.59c.64 0 1.23.17 1.76.52s.92.8 1.18 1.37c.07.11.14.16.21.16h1.43c.12 0 .17-.07.14-.23-.29-1.02-.88-1.86-1.74-2.51-.87-.65-1.86-.97-2.97-.97h-.32c-.33-1.33-1.03-2.42-2.1-3.27s-2.28-1.27-3.65-1.27c-1.4 0-2.64.44-3.73 1.32s-1.78 2-2.09 3.36c-.85.2-1.6.6-2.24 1.21-.64.61-1.09 1.33-1.34 2.18v-.04c-.01 0-.01.03-.01.07zm1.61 8.59c0-.24.09-.43.26-.59.15-.15.35-.23.6-.23h18.68c.24 0 .44.08.6.23.17.16.25.35.25.58 0 .24-.08.44-.25.61-.17.17-.37.25-.6.25H7.84c-.23 0-.43-.09-.6-.26a.773.773 0 01-.26-.59z" />
        </svg>
      );
}

export const WiDayRainMix = (props: IconProps) => {
    return (
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          {...props}
        >
          <path d="M1.48 16.95c0 1.32.46 2.46 1.37 3.4.91.94 2.04 1.45 3.38 1.51.12 0 .18-.06.18-.17v-1.33c0-.12-.06-.18-.18-.18-.86-.04-1.58-.38-2.17-1s-.88-1.37-.88-2.24c0-.84.28-1.58.84-2.19.56-.62 1.26-.96 2.1-1.03l.53-.08c.11 0 .16-.05.16-.14l.08-.55c.12-1.09.59-2 1.38-2.72S10 9.16 11.1 9.16s2.05.36 2.86 1.08c.82.72 1.28 1.62 1.38 2.69l.07.58c.02.11.1.17.22.17h1.6c.89 0 1.65.32 2.29.96.64.64.96 1.41.96 2.31 0 .87-.29 1.61-.88 2.24s-1.31.95-2.17 1c-.13 0-.2.06-.2.18v1.33c0 .11.07.17.2.17 1.33-.04 2.45-.54 3.37-1.49.91-.95 1.37-2.09 1.37-3.42 0-.68-.13-1.34-.38-2.01.78-.96 1.16-2.08 1.16-3.35 0-.71-.14-1.38-.41-2.03-.27-.65-.65-1.2-1.12-1.67s-1.03-.84-1.67-1.12-1.33-.42-2.04-.42c-1.54 0-2.83.58-3.86 1.74-.89-.44-1.81-.66-2.74-.66-1.41 0-2.66.44-3.74 1.31s-1.77 2-2.08 3.38c-1.12.26-2.04.83-2.75 1.73s-1.06 1.93-1.06 3.09zm5.35 7.03c0 .17.05.34.16.51.11.17.27.28.47.35.23.07.45.06.64-.04.2-.09.33-.28.4-.56l.14-.61c.05-.23.02-.44-.1-.63a.875.875 0 00-.52-.4c-.23-.07-.44-.04-.64.08s-.32.29-.38.52l-.14.59c-.02.06-.03.12-.03.19zm.77-2.9c0 .22.08.41.24.57.16.18.35.26.56.26.24 0 .44-.08.6-.24.17-.16.25-.35.25-.59 0-.23-.08-.43-.25-.59a.847.847 0 00-.6-.24c-.23 0-.42.08-.58.23s-.22.37-.22.6zm.61-2.27c-.01.16.03.31.13.45.1.15.26.25.48.32a.8.8 0 00.62-.07c.21-.11.35-.28.42-.51l.27-.9c.07-.24.05-.46-.07-.65a.913.913 0 00-.54-.39.737.737 0 00-.63.07.85.85 0 00-.41.5l-.24.92c-.02.16-.03.25-.03.26zm1.15 8.29c0 .17.05.33.16.49.11.16.27.27.49.33.09.02.17.03.24.03.43 0 .7-.2.8-.61l.13-.59c.06-.26.03-.48-.08-.68s-.29-.32-.52-.37a.744.744 0 00-.63.07c-.21.12-.34.29-.41.51l-.14.6c-.03.11-.04.19-.04.22zm.56-22.44c0 .24.08.44.24.6l.66.64c.14.16.32.24.54.26.22.02.43-.07.62-.26.16-.16.24-.36.24-.59 0-.24-.08-.44-.24-.6l-.63-.65a.869.869 0 00-.58-.26c-.23 0-.43.08-.6.25-.16.17-.25.37-.25.61zm.23 19.54c0 .23.08.42.24.58.16.16.36.24.58.24.24 0 .43-.08.59-.23.16-.16.23-.35.23-.59a.784.784 0 00-.82-.81c-.24 0-.43.08-.59.23s-.23.35-.23.58zm.62-2.27c-.01.15.03.31.14.47.1.16.25.26.45.3.23.06.44.04.64-.06s.33-.29.41-.56l.26-.9c.07-.22.05-.43-.07-.63a.867.867 0 00-.53-.4c-.22-.07-.43-.04-.64.08s-.34.3-.41.53l-.22.9c-.02.08-.03.17-.03.27zm2.76 2.15c0 .17.05.33.15.48.1.15.25.26.46.32.03 0 .08.01.14.02.06.01.11.02.14.02.41 0 .66-.22.76-.66l.14-.6c.07-.21.05-.42-.07-.63a.863.863 0 00-.51-.41c-.25-.06-.48-.04-.68.08s-.34.29-.41.53l-.09.59c0 .01 0 .05-.01.11-.01.07-.02.11-.02.15zm.74-2.96c0 .23.08.42.24.57.15.16.34.24.58.24s.43-.08.59-.23c.16-.16.23-.35.23-.58 0-.24-.08-.43-.23-.59-.16-.16-.35-.23-.59-.23s-.43.08-.59.23-.23.35-.23.59zm.61-2.31c0 .17.05.33.16.48.11.15.27.26.49.32.02 0 .06.01.12.02s.11.02.14.02c.11 0 .23-.03.37-.09.21-.11.34-.28.4-.52l.24-.9c.06-.23.04-.44-.07-.63s-.28-.33-.5-.4a.787.787 0 00-.64.06c-.2.11-.33.27-.4.51l-.28.91c0 .02 0 .05-.01.11a.36.36 0 00-.02.11zm.35-9.72c.66-.66 1.48-.99 2.47-.99.99 0 1.83.34 2.52 1.02s1.04 1.5 1.04 2.48c0 .66-.18 1.29-.53 1.88-.98-.98-2.15-1.47-3.5-1.47h-.31c-.28-1.1-.85-2.07-1.69-2.92zm1.65-5.26c0 .23.08.42.23.58.15.15.35.23.59.23s.45-.08.62-.23c.17-.15.25-.35.25-.58V1.76c0-.23-.09-.43-.26-.6a.838.838 0 00-.61-.25c-.23 0-.43.08-.58.25-.16.17-.23.37-.23.6v2.07zm5.52 2.26c0 .25.08.45.23.6.36.36.76.36 1.21 0l1.43-1.43c.17-.17.25-.38.25-.63 0-.24-.08-.44-.25-.6a.816.816 0 00-.6-.25c-.23 0-.43.08-.61.24L22.63 5.5a.79.79 0 00-.23.59zm.78 11.85c0 .23.09.43.27.59l.61.63c.2.16.4.24.61.24.2 0 .4-.08.6-.24.17-.16.25-.35.25-.59 0-.23-.08-.43-.25-.62l-.65-.61c-.15-.17-.34-.25-.57-.25s-.43.08-.6.25a.8.8 0 00-.27.6zm1.48-6.34c0 .24.09.43.26.59.18.18.39.27.62.27h2.03c.23 0 .43-.08.59-.25.16-.17.24-.37.24-.61s-.08-.44-.24-.6a.764.764 0 00-.59-.25h-2.03c-.24 0-.44.08-.62.25s-.26.37-.26.6z" />
        </svg>
      );
}

export const WiRainMix = (props: IconProps) => {
    return (
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          {...props}
        >
          <path d="M4.65 16.96c0 1.32.47 2.46 1.4 3.41.93.96 2.06 1.46 3.38 1.5.12 0 .18-.06.18-.17v-1.33c0-.12-.06-.18-.18-.18-.84-.04-1.57-.38-2.17-1.02s-.91-1.37-.91-2.22c0-.84.28-1.57.85-2.19.57-.62 1.26-.97 2.1-1.04l.53-.07c.12 0 .19-.06.19-.18l.07-.5c.1-1.09.55-2.01 1.36-2.75s1.76-1.11 2.86-1.11c1.08 0 2.03.37 2.84 1.1.81.73 1.28 1.63 1.4 2.71l.07.58c0 .12.06.18.19.18h1.6c.9 0 1.67.32 2.32.97.64.64.97 1.41.97 2.3 0 .84-.3 1.58-.9 2.22-.6.63-1.33.97-2.18 1.02-.13 0-.2.06-.2.18v1.33c0 .11.07.17.2.17 1.33-.04 2.46-.54 3.38-1.5s1.38-2.09 1.38-3.42c0-.89-.22-1.72-.67-2.48a4.884 4.884 0 00-1.81-1.8c-.76-.44-1.59-.66-2.48-.66h-.31A5.885 5.885 0 0018 8.72a5.763 5.763 0 00-3.68-1.28c-1.41 0-2.66.44-3.75 1.31s-1.79 1.99-2.1 3.35c-1.13.29-2.04.88-2.75 1.77s-1.07 1.93-1.07 3.09zm5.4 7.02c0 .17.05.34.16.51.11.17.27.28.47.35.23.07.44.06.64-.04.19-.09.33-.28.39-.56l.14-.61a.853.853 0 00-.61-1.03c-.22-.07-.44-.04-.64.08s-.34.3-.4.53l-.14.59c0 .03-.01.09-.01.18zm.76-2.9c0 .21.08.4.25.57.16.17.34.25.56.25.24 0 .44-.08.6-.24.16-.16.24-.35.24-.59 0-.23-.08-.43-.24-.59a.814.814 0 00-.6-.24c-.23 0-.42.08-.58.23-.15.18-.23.38-.23.61zm.61-2.27c-.01.16.03.31.14.45.1.15.26.25.48.32.21.06.41.04.62-.07s.34-.28.41-.51l.28-.9c.07-.24.05-.46-.07-.65a.913.913 0 00-.54-.39.737.737 0 00-.63.07.85.85 0 00-.41.5l-.24.92c0 .02-.01.06-.02.12-.01.05-.02.1-.02.14zm1.17 8.29c0 .18.05.34.15.5.1.16.26.27.48.33.08.02.17.03.25.03.43 0 .69-.2.79-.61l.14-.59a.92.92 0 00-.08-.68.765.765 0 00-.52-.37.744.744 0 00-.63.07c-.21.12-.34.29-.41.51l-.14.59c-.02.09-.03.16-.03.22zm.77-2.9c0 .22.08.41.25.58.16.16.35.24.57.24.24 0 .43-.08.59-.23.16-.16.23-.35.23-.59a.784.784 0 00-.82-.81c-.24 0-.43.08-.59.23s-.23.35-.23.58zm.63-2.27c-.01.15.03.31.13.47.1.16.25.26.45.3.23.06.44.04.64-.06s.33-.29.41-.56l.27-.9c.07-.22.05-.43-.07-.63a.867.867 0 00-.53-.4.766.766 0 00-.64.08c-.21.12-.34.3-.41.53l-.23.9c-.01.08-.02.17-.02.27zm2.76 2.15c0 .16.05.32.15.48.1.16.26.27.46.33.03 0 .08.01.14.02.06.01.1.02.14.02.41 0 .66-.22.76-.66l.14-.6c.07-.21.05-.42-.07-.63a.809.809 0 00-.51-.41c-.25-.06-.48-.04-.68.08s-.34.29-.41.53l-.09.59c0 .02-.01.07-.02.12s-.01.09-.01.13zm.74-2.96c0 .22.08.42.25.57.15.16.34.24.57.24.24 0 .43-.08.59-.23s.23-.35.23-.58c0-.24-.08-.43-.23-.59s-.35-.23-.59-.23-.43.08-.59.23c-.15.16-.23.35-.23.59zm.61-2.31c0 .17.05.33.16.48.11.15.27.26.49.32.02 0 .06.01.12.02s.11.02.14.02c.1 0 .22-.03.36-.09.21-.11.35-.29.41-.52l.24-.9c.06-.23.04-.44-.08-.63a.827.827 0 00-.51-.4.79.79 0 00-.64.06c-.19.11-.33.27-.39.51l-.28.91c0 .02-.01.06-.02.12v.1z" />
        </svg>
      );
}

export const WiThunderstorm = (props: IconProps) => {
    return (
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          {...props}
        >
          <path d="M4.63 16.91c0 1.11.33 2.1.99 2.97s1.52 1.47 2.58 1.79l-.66 1.68c-.03.14.02.22.14.22h2.13l-.98 4.3h.28l3.92-5.75c.04-.04.04-.09.01-.14-.03-.05-.08-.07-.15-.07h-2.18l2.48-4.64c.07-.14.02-.22-.14-.22h-2.94c-.09 0-.17.05-.23.15l-1.07 2.87c-.71-.18-1.3-.57-1.77-1.16s-.7-1.26-.7-2.01c0-.83.28-1.55.85-2.17.57-.61 1.27-.97 2.1-1.07l.53-.07c.13 0 .2-.06.2-.18l.07-.51c.11-1.08.56-1.99 1.37-2.72.81-.73 1.76-1.1 2.85-1.1s2.04.37 2.85 1.1c.82.73 1.28 1.64 1.4 2.72l.07.58c0 .11.06.17.18.17h1.6c.91 0 1.68.32 2.32.95.64.63.97 1.4.97 2.28 0 .85-.3 1.59-.89 2.21-.59.62-1.33.97-2.2 1.04-.13 0-.2.06-.2.18v1.37c0 .11.07.17.2.17 1.33-.04 2.46-.55 3.39-1.51s1.39-2.11 1.39-3.45c0-.9-.22-1.73-.67-2.49a4.884 4.884 0 00-1.81-1.8c-.77-.44-1.6-.66-2.5-.66h-.31c-.33-1.33-1.04-2.42-2.11-3.26s-2.3-1.27-3.68-1.27c-1.41 0-2.67.44-3.76 1.31s-1.79 1.99-2.1 3.36c-1.11.26-2.02.83-2.74 1.73s-1.08 1.95-1.08 3.1zm8.14 9.71c0 .39.19.65.58.77.01 0 .05 0 .11.01s.11.01.14.01c.17 0 .33-.05.49-.15.16-.1.27-.26.32-.48l2.25-8.69c.06-.24.04-.45-.07-.65a.827.827 0 00-.5-.39l-.26-.03c-.16 0-.32.05-.47.15a.74.74 0 00-.31.45l-2.26 8.72c-.01.1-.02.19-.02.28zm4.16-3.06c0 .13.03.26.1.38.14.22.31.37.51.44.11.03.21.05.3.05s.2-.02.32-.08c.21-.09.35-.28.42-.57l1.44-5.67c.03-.14.05-.23.05-.27 0-.15-.05-.3-.16-.45s-.26-.26-.46-.32l-.26-.03c-.17 0-.33.05-.47.15a.82.82 0 00-.3.45l-1.46 5.7c0 .02 0 .05-.01.11-.02.05-.02.08-.02.11z" />
        </svg>
      );
}

export const WiDaySleet = (props: IconProps) => {
    return (
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          {...props}
        >
          <path d="M1.49 16.92c0-1.17.36-2.19 1.08-3.09s1.64-1.48 2.74-1.74c.31-1.37 1.01-2.49 2.1-3.38 1.1-.88 2.35-1.32 3.77-1.32.99 0 1.9.22 2.72.66.5-.53 1.09-.95 1.76-1.25.67-.3 1.37-.45 2.09-.45.95 0 1.83.24 2.64.71s1.45 1.11 1.92 1.92c.47.81.71 1.69.71 2.64 0 1.23-.38 2.33-1.14 3.29.29.61.43 1.28.43 2.02 0 .88-.21 1.7-.64 2.45-.42.75-1 1.36-1.74 1.81-.73.46-1.54.7-2.42.72-.13 0-.2-.06-.2-.18v-1.34c0-.12.07-.18.2-.18.86-.04 1.58-.39 2.18-1.03.6-.64.9-1.4.9-2.26 0-.89-.32-1.65-.97-2.29s-1.41-.96-2.31-.96H15.7c-.12 0-.18-.06-.18-.17l-.08-.59c-.11-1.08-.58-1.99-1.4-2.72-.82-.73-1.78-1.1-2.86-1.1-1.1 0-2.05.37-2.86 1.1-.81.73-1.27 1.64-1.37 2.72l-.07.59c-.03.09-.11.13-.22.13l-.51.04c-.84.1-1.55.45-2.11 1.06s-.84 1.34-.84 2.18v.05h.03c.01.98.38 1.78 1.11 2.43.22.19.47.36.74.49v.02c.41.19.82.29 1.21.31.11 0 .17.06.17.17v1.34c0 .11-.06.17-.17.17-.52-.03-1.01-.13-1.48-.3v.02c-.83-.29-1.54-.77-2.11-1.43s-.95-1.44-1.11-2.31v-.04c-.01-.01-.01-.02-.01-.03-.07-.26-.09-.55-.09-.88zm5.5 7.17c0-.03.01-.07.02-.13.01-.05.02-.09.02-.12l.09-.59c.07-.24.2-.41.41-.53.2-.12.43-.14.68-.08.23.07.39.2.51.41.11.2.13.41.07.62l-.14.6c-.1.44-.35.66-.76.66-.03 0-.08 0-.15-.01s-.11-.01-.13-.01a.761.761 0 01-.46-.33.82.82 0 01-.16-.49zm.74-2.94c0-.24.08-.43.23-.59.16-.16.35-.23.59-.23s.43.08.59.23c.16.16.23.35.23.59 0 .23-.08.42-.23.58s-.35.23-.59.23c-.23 0-.42-.08-.57-.24a.752.752 0 01-.25-.57zm1.64 5.98c0-.04.01-.11.04-.23l.13-.58c.07-.23.21-.4.41-.51.21-.12.42-.14.63-.07.23.04.41.17.53.37.12.2.15.43.08.68l-.13.59c-.1.41-.37.61-.8.61-.05 0-.13-.01-.24-.04a.831.831 0 01-.49-.33.842.842 0 01-.16-.49zM9.9 4.62c0-.24.08-.44.25-.6.17-.16.38-.24.63-.24.24 0 .44.08.6.24l.63.66c.17.17.25.37.25.6 0 .24-.1.46-.3.64-.2.18-.4.26-.61.23a.875.875 0 01-.55-.27l-.65-.66a.857.857 0 01-.25-.6zm.26 19.61a.784.784 0 01.82-.81c.24 0 .43.08.59.23.16.16.23.35.23.58 0 .24-.08.43-.23.59-.16.16-.35.23-.59.23-.22 0-.41-.08-.58-.25a.779.779 0 01-.24-.57zm.62-2.27c0-.09.01-.18.03-.26l.23-.9c.07-.23.21-.41.41-.53.21-.12.42-.15.64-.08.24.07.41.2.53.4.12.2.14.4.07.62l-.26.9c-.08.27-.22.46-.41.57s-.41.12-.64.06a.657.657 0 01-.45-.3c-.12-.18-.17-.33-.15-.48zm2.76 2.14c0-.03 0-.07.01-.13s.01-.09.01-.11l.09-.59c.07-.24.2-.41.41-.53.2-.12.43-.14.68-.08.23.07.4.21.51.41.12.21.14.42.07.63l-.14.6c-.1.43-.35.65-.76.65-.03 0-.08 0-.15-.01-.07-.01-.11-.01-.13-.01a.768.768 0 01-.45-.33.965.965 0 01-.15-.5zm.74-2.94c0-.24.08-.43.23-.59.16-.16.35-.23.59-.23s.43.08.59.23c.16.16.23.35.23.59a.784.784 0 01-.82.81c-.23 0-.43-.08-.58-.25a.741.741 0 01-.24-.56zm1.03-12.11c.84.76 1.4 1.74 1.7 2.93h.31c1.38 0 2.55.48 3.52 1.45.31-.55.47-1.16.47-1.82 0-.98-.35-1.81-1.04-2.5a3.458 3.458 0 00-2.51-1.03c-.96 0-1.78.32-2.45.97zm1.6-5.27V1.73c0-.24.08-.44.25-.61.17-.17.37-.26.6-.26.24 0 .44.08.6.25.16.17.24.38.24.62v2.05c0 .24-.08.45-.24.62-.16.17-.36.25-.6.25-.23 0-.43-.09-.6-.26a.822.822 0 01-.25-.61zm5.58 2.29c0-.24.08-.44.23-.6l1.44-1.45a.73.73 0 01.58-.25c.24 0 .44.08.6.25.18.16.26.36.26.6s-.09.44-.26.6L23.9 6.68a.81.81 0 01-.63.26.778.778 0 01-.55-.26c-.16-.16-.23-.36-.23-.61zm.77 11.91c0-.24.08-.44.25-.61.17-.17.37-.25.6-.25.23 0 .43.09.61.26l.62.63c.18.17.26.38.26.61 0 .24-.09.44-.26.6-.14.17-.32.26-.54.26l-.02-.02c-.24 0-.44-.08-.62-.24l-.65-.64a.857.857 0 01-.25-.6zm1.47-6.37c0-.24.08-.44.25-.6.17-.16.37-.24.61-.24h2.06a.837.837 0 01.86.84c0 .24-.08.44-.25.61-.17.17-.37.25-.61.25h-2.06a.77.77 0 01-.6-.27.727.727 0 01-.26-.59z" />
        </svg>
      );
}

export const WiSleet = (props: IconProps) => {
    return (
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          {...props}
        >
          <path d="M4.09 16.95c0-1.16.36-2.19 1.08-3.09s1.64-1.49 2.74-1.74c.31-1.37 1.01-2.49 2.1-3.37s2.35-1.32 3.77-1.32c.81 0 1.55.13 2.2.4 0 .01 0 .01.01.02.84.32 1.58.84 2.21 1.55h.03c.68.73 1.13 1.6 1.37 2.62h.31c1.08 0 2.02.29 2.83.86v-.01c.53.36.98.8 1.34 1.33.36.53.6 1.11.73 1.74.04.21.06.38.08.52v.06c0 .01 0 .06.01.17s.01.19.01.24v.03c0 .88-.21 1.7-.64 2.45-.42.75-1 1.36-1.74 1.81-.73.45-1.54.69-2.42.72-.13 0-.2-.06-.2-.17v-1.34c0-.13.07-.19.2-.19.86-.04 1.58-.38 2.18-1.02.6-.64.9-1.39.9-2.26 0-.89-.32-1.65-.97-2.29a3.15 3.15 0 00-2.31-.96H18.3c-.12 0-.18-.06-.18-.17l-.08-.59c-.1-1-.52-1.86-1.27-2.59-.01-.01-.01-.02-.02-.03s-.02-.02-.02-.03c-.01-.01-.02-.02-.04-.02 0-.02-.01-.03-.02-.03a4.24 4.24 0 00-2.56-1.12c-.07-.01-.18-.01-.34-.01-1.1 0-2.05.37-2.86 1.1s-1.27 1.64-1.37 2.72l-.08.59c-.03.09-.11.14-.22.14l-.49.03c-.84.1-1.55.46-2.11 1.07s-.84 1.34-.84 2.18v.04h.03c.01.48.11.93.3 1.35.2.43.46.79.8 1.09.21.18.45.34.74.48v.01c.4.19.8.3 1.21.32.11 0 .17.06.17.18v1.34c0 .11-.06.17-.17.17-.52-.03-1.01-.13-1.48-.3v.01c-.83-.29-1.54-.77-2.11-1.43s-.95-1.44-1.11-2.31v-.03c-.01-.01-.01-.02-.01-.04-.06-.26-.08-.56-.08-.88zm5.5 7.17c0-.03.01-.07.02-.13.01-.05.02-.09.02-.12l.09-.59c.07-.24.2-.41.41-.53s.43-.14.68-.08c.23.07.39.21.51.41.11.21.13.42.07.63l-.14.6c-.1.44-.35.66-.76.66-.03 0-.08-.01-.14-.02-.06-.01-.1-.02-.14-.02a.761.761 0 01-.46-.33.791.791 0 01-.16-.48zm.74-2.94c0-.24.08-.43.23-.59s.35-.23.59-.23.43.08.59.23.23.35.23.59c0 .23-.08.42-.23.58s-.35.23-.59.23c-.23 0-.42-.08-.57-.24a.789.789 0 01-.25-.57zm1.64 5.99c0-.04.01-.11.04-.23l.13-.59c.07-.23.21-.4.41-.51.21-.12.42-.14.63-.07.23.04.41.17.53.37.12.2.15.43.08.68l-.13.59c-.1.41-.37.61-.8.61-.07 0-.16-.01-.24-.03a.831.831 0 01-.49-.33.92.92 0 01-.16-.49zm.79-2.91a.784.784 0 01.82-.81c.24 0 .43.08.59.23.16.16.23.35.23.58 0 .24-.08.43-.23.59-.16.16-.35.23-.59.23-.23 0-.42-.08-.58-.24a.785.785 0 01-.24-.58zm.62-2.27c0-.1.01-.19.03-.27l.23-.9c.07-.23.21-.41.41-.53.21-.12.42-.15.64-.08.24.07.41.2.53.4s.14.41.07.63l-.26.9c-.08.28-.22.46-.41.56-.19.1-.41.12-.64.06a.657.657 0 01-.45-.3.69.69 0 01-.15-.47zm2.76 2.14c0-.03 0-.08.01-.13s.01-.09.01-.11l.09-.59c.07-.24.2-.41.41-.53s.43-.14.68-.08c.23.07.4.21.51.41.12.21.14.42.07.63l-.14.6c-.1.44-.35.66-.76.66-.03 0-.08-.01-.14-.02-.06-.01-.11-.02-.14-.02a.768.768 0 01-.45-.33 1 1 0 01-.15-.49zm.74-2.94c0-.24.08-.43.23-.59.16-.16.35-.23.59-.23s.43.08.59.23c.16.16.23.35.23.59a.783.783 0 01-.81.81c-.24 0-.43-.08-.58-.24a.756.756 0 01-.25-.57z" />
        </svg>
      );
}

export const WiDaySnow = (props: IconProps) => {
    return (
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          {...props}
        >
          <path d="M1.58 16.93c0 .86.21 1.67.64 2.41.42.74 1 1.34 1.74 1.79.73.45 1.54.69 2.4.71.11 0 .17-.06.17-.17v-1.33c0-.12-.06-.19-.17-.19-.85-.04-1.58-.38-2.18-1.02s-.9-1.37-.9-2.21c0-.82.28-1.54.85-2.16.57-.61 1.26-.97 2.1-1.07l.53-.06c.12 0 .18-.06.18-.19l.08-.51c.11-1.09.56-2 1.36-2.73s1.75-1.09 2.85-1.09c1.09 0 2.04.36 2.85 1.09.82.73 1.28 1.63 1.38 2.7l.07.58c0 .11.06.17.17.17h1.61c.9 0 1.67.32 2.31.96.64.64.96 1.4.96 2.29 0 .84-.3 1.57-.9 2.21-.6.63-1.33.97-2.17 1.02-.12 0-.19.06-.19.19v1.33c0 .11.06.17.19.17 1.33-.04 2.45-.54 3.38-1.5.93-.96 1.39-2.09 1.39-3.41 0-.76-.14-1.43-.43-2.03.75-.93 1.15-2.03 1.15-3.28 0-.94-.23-1.81-.7-2.61-.47-.8-1.11-1.44-1.91-1.91s-1.68-.7-2.62-.7c-1.54 0-2.83.58-3.87 1.73-.81-.44-1.71-.66-2.69-.66-1.41 0-2.65.44-3.74 1.31s-1.78 1.99-2.09 3.34c-1.12.28-2.03.86-2.74 1.75-.71.9-1.06 1.92-1.06 3.08zm6.34 4.05c0 .24.08.44.24.61.16.17.35.25.59.25.23 0 .43-.08.59-.25.16-.17.24-.37.24-.61 0-.23-.08-.42-.24-.58s-.35-.24-.59-.24c-.23 0-.43.08-.59.24s-.24.36-.24.58zm0 3.63c0 .21.08.4.24.57.18.16.37.24.58.24.24 0 .43-.08.59-.23.16-.16.23-.35.23-.58 0-.24-.08-.43-.24-.59a.784.784 0 00-.59-.23.84.84 0 00-.59.23c-.14.15-.22.35-.22.59zM9.97 4.68c0 .24.08.44.24.59l.66.66c.16.16.34.25.53.25.21.03.41-.04.61-.22s.3-.39.3-.63-.08-.46-.24-.64l-.64-.61a.73.73 0 00-.58-.25c-.25 0-.46.08-.63.25-.17.16-.25.36-.25.6zM11.1 22.9c0 .22.08.42.24.6.16.16.36.24.58.24.24 0 .44-.08.6-.24s.25-.36.25-.6c0-.23-.08-.43-.25-.6s-.37-.25-.6-.25c-.23 0-.42.08-.58.25s-.24.37-.24.6zm0-3.6c0 .23.08.42.24.58s.36.24.58.24c.24 0 .44-.08.6-.24.17-.16.25-.35.25-.59 0-.23-.08-.43-.25-.59s-.37-.24-.6-.24c-.23 0-.42.08-.58.24s-.24.37-.24.6zm0 7.26c0 .22.08.41.24.57.17.17.36.25.58.25.24 0 .44-.08.6-.23.17-.16.25-.35.25-.59s-.08-.44-.25-.6a.816.816 0 00-.6-.25c-.22 0-.41.08-.58.25-.16.17-.24.37-.24.6zm3.22-5.58c0 .24.08.44.24.61.16.17.36.25.59.25s.43-.08.59-.25c.16-.17.24-.37.24-.61 0-.23-.08-.42-.24-.58s-.35-.24-.59-.24-.43.08-.59.24-.24.36-.24.58zm0 3.63c0 .21.08.4.23.57.18.16.38.24.6.24.24 0 .43-.08.59-.23.16-.16.23-.35.23-.58 0-.24-.08-.43-.24-.59a.784.784 0 00-.59-.23c-.24 0-.44.08-.6.24-.14.15-.22.35-.22.58zm.98-15.55c.69-.66 1.51-.99 2.47-.99.97 0 1.8.35 2.48 1.04.69.69 1.03 1.53 1.03 2.49 0 .62-.17 1.24-.51 1.84-.95-.96-2.11-1.44-3.47-1.44h-.32c-.3-1.17-.86-2.15-1.68-2.94zm1.6-5.22c0 .23.08.43.25.58s.37.23.61.23.43-.08.59-.23c.16-.16.23-.35.23-.58V1.8c0-.24-.08-.44-.24-.61S18 .94 17.77.94s-.43.09-.6.26c-.17.17-.26.37-.26.6v2.04zm5.52 2.27c0 .23.08.43.25.59.15.16.34.24.56.26s.43-.07.62-.26l1.43-1.43c.18-.18.26-.38.26-.61 0-.24-.09-.44-.26-.61a.816.816 0 00-.6-.25c-.22 0-.41.08-.58.25l-1.43 1.46c-.17.16-.25.36-.25.6zm.8 11.8c0 .25.08.46.24.62l.64.63c.24.16.46.24.64.24.21 0 .39-.09.56-.26.17-.17.25-.38.25-.61 0-.23-.09-.42-.26-.58l-.62-.65c-.18-.16-.38-.24-.61-.24s-.43.08-.59.25c-.17.16-.25.36-.25.6zm1.45-6.31c0 .24.09.43.26.59.17.18.38.27.62.27h2.02c.23 0 .43-.08.6-.25s.25-.37.25-.61-.08-.44-.25-.6-.37-.25-.6-.25h-2.02c-.24 0-.44.08-.62.25s-.26.37-.26.6z" />
        </svg>
      );
}

export const WiSnow = (props: IconProps) => {
    return (
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          {...props}
        >
          <path d="M4.64 16.95c0-1.16.35-2.18 1.06-3.08s1.62-1.48 2.74-1.76c.31-1.36 1.01-2.48 2.1-3.36s2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28 1.08.85 1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.66.76.44 1.37 1.04 1.81 1.8.44.76.67 1.59.67 2.48 0 1.32-.46 2.47-1.39 3.42-.92.96-2.05 1.46-3.38 1.5-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18.85-.04 1.58-.38 2.18-1.02s.9-1.38.9-2.23c0-.89-.32-1.65-.97-2.3s-1.42-.97-2.32-.97h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58c-.11-1.08-.58-1.99-1.39-2.72-.82-.73-1.76-1.1-2.85-1.1-1.1 0-2.05.37-2.86 1.11-.81.74-1.27 1.65-1.37 2.75l-.06.5c0 .12-.07.19-.2.19l-.53.07c-.83.07-1.53.41-2.1 1.04s-.85 1.35-.85 2.19c0 .85.3 1.59.9 2.23s1.33.97 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17-1.34-.04-2.47-.54-3.4-1.5-.87-.96-1.33-2.11-1.33-3.43zM11 21.02c0-.22.08-.42.24-.58.16-.16.35-.24.59-.24.23 0 .43.08.59.24.16.16.24.36.24.58 0 .24-.08.44-.24.6-.16.17-.35.25-.59.25-.23 0-.43-.08-.59-.25a.814.814 0 01-.24-.6zm0 3.63c0-.24.08-.44.24-.6.16-.15.35-.23.58-.23.23 0 .43.08.59.23.16.16.24.35.24.59s-.08.43-.24.59c-.16.16-.35.23-.59.23a.84.84 0 01-.59-.23.8.8 0 01-.23-.58zm3.19-1.7c0-.23.08-.44.25-.62.16-.16.35-.24.57-.24.23 0 .43.09.6.26.17.17.26.37.26.6 0 .23-.08.43-.25.6-.17.17-.37.25-.61.25-.23 0-.42-.08-.58-.25s-.24-.37-.24-.6zm0-3.62c0-.23.08-.43.25-.6.18-.16.37-.24.57-.24.24 0 .44.08.61.25a.8.8 0 01.25.6c0 .23-.08.43-.25.59-.17.16-.37.24-.61.24-.23 0-.42-.08-.58-.24a.847.847 0 01-.24-.6zm0 7.28c0-.23.08-.43.25-.61.16-.16.35-.24.57-.24.24 0 .44.08.61.25.17.17.25.37.25.6s-.08.43-.25.59c-.17.16-.37.24-.61.24a.824.824 0 01-.82-.83zm3.22-5.59c0-.22.08-.41.25-.58.17-.17.37-.25.6-.25.23 0 .43.08.59.24.16.16.24.36.24.58 0 .24-.08.44-.24.6-.16.17-.35.25-.59.25s-.44-.08-.6-.25a.816.816 0 01-.25-.59zm0 3.63c0-.22.08-.42.25-.6.16-.15.36-.23.6-.23s.43.08.59.23.23.35.23.59-.08.43-.23.59c-.16.16-.35.23-.59.23s-.44-.08-.6-.24a.756.756 0 01-.25-.57z" />
        </svg>
      );
}

export const WiDayRain = (props: IconProps) => {
    return (
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          {...props}
        >
          <path d="M1.51 16.89c0 1.33.46 2.48 1.39 3.44s2.06 1.47 3.41 1.53c.11 0 .17-.06.17-.17v-1.34c0-.11-.06-.17-.17-.17-.86-.04-1.59-.39-2.19-1.03s-.9-1.4-.9-2.26c0-.82.28-1.54.85-2.16s1.27-.97 2.1-1.07l.53-.05c.13 0 .2-.06.2-.17l.07-.54c.11-1.08.56-1.99 1.37-2.72s1.76-1.1 2.85-1.1 2.04.37 2.86 1.1 1.28 1.64 1.4 2.72l.07.57c0 .12.06.19.17.19h1.62c.89 0 1.65.32 2.3.96.65.64.97 1.39.97 2.27 0 .87-.3 1.62-.9 2.26-.6.64-1.33.98-2.18 1.03-.12 0-.19.06-.19.17v1.34c0 .11.06.17.19.17 1.33-.04 2.46-.55 3.39-1.51.93-.97 1.39-2.12 1.39-3.45 0-.72-.14-1.39-.42-2.01.78-.97 1.17-2.07 1.17-3.31 0-.95-.24-1.83-.71-2.64s-1.11-1.45-1.92-1.92-1.68-.7-2.62-.7c-1.56 0-2.85.58-3.88 1.74-.82-.44-1.72-.66-2.71-.66-1.41 0-2.67.44-3.76 1.32s-1.79 2-2.1 3.36c-1.11.26-2.02.84-2.74 1.74s-1.08 1.92-1.08 3.07zm5.4 6.86c0 .17.05.33.16.49.11.16.27.27.49.33.11.02.2.04.27.04.39 0 .65-.21.77-.64l1.58-5.88c.07-.24.04-.46-.08-.67a.767.767 0 00-.53-.38.737.737 0 00-.63.07c-.2.11-.34.28-.41.51l-1.58 5.91c-.02.13-.04.2-.04.22zm2.61 3.08c0 .19.05.36.15.52.1.16.27.26.52.3.11.02.2.04.26.04.16 0 .31-.06.45-.17.14-.12.23-.28.27-.48l2.4-8.93c.06-.23.04-.45-.07-.64s-.28-.33-.5-.4a.777.777 0 00-.65.07c-.2.11-.34.28-.4.51l-2.4 8.93c-.02.15-.03.24-.03.25zM9.94 4.6c0 .24.08.44.25.61l.65.66c.19.15.4.22.62.22.21 0 .41-.08.58-.23.17-.16.26-.35.26-.59s-.08-.46-.24-.64l-.64-.65a.854.854 0 00-1.22.01c-.17.17-.26.38-.26.61zm3.73 19.17a.822.822 0 00.61.79c.11.02.2.04.25.04.17 0 .34-.05.49-.15.15-.1.25-.26.3-.49l1.58-5.88a.835.835 0 00-.57-1.04.773.773 0 00-.65.07.78.78 0 00-.39.51l-1.58 5.91c-.02.15-.04.23-.04.24zM15.3 9.03c.71-.67 1.53-1 2.48-1 .98 0 1.82.35 2.5 1.04.69.69 1.03 1.53 1.03 2.52 0 .62-.17 1.24-.52 1.85-.97-.97-2.13-1.45-3.49-1.45h-.33a5.763 5.763 0 00-1.67-2.96zm1.62-5.25c0 .23.08.43.25.59.17.16.37.24.61.24.23 0 .43-.08.59-.23.16-.16.24-.35.24-.59V1.73c0-.26-.08-.47-.23-.63a.791.791 0 00-.59-.24c-.25 0-.46.08-.62.25s-.24.37-.24.62v2.05zm5.53 2.28c0 .24.09.44.27.59.14.16.32.24.55.26.23.02.44-.07.62-.26l1.44-1.43c.18-.17.26-.38.26-.63 0-.24-.08-.45-.25-.61a.853.853 0 00-.61-.24c-.21 0-.4.08-.58.25l-1.43 1.44c-.18.17-.27.38-.27.63zm.81 11.85c0 .24.08.45.24.63l.65.63c.18.14.38.21.6.21l.02.02c.23 0 .42-.08.58-.24.16-.16.24-.37.24-.61s-.09-.43-.26-.58l-.62-.66c-.18-.16-.39-.24-.62-.24s-.43.08-.59.25-.24.35-.24.59zm1.46-6.33c0 .24.09.43.26.59.18.18.38.26.62.26h2.03c.24 0 .44-.08.61-.25.17-.17.25-.37.25-.6 0-.24-.08-.44-.25-.61s-.37-.26-.61-.26H25.6a.87.87 0 00-.62.26c-.18.17-.26.37-.26.61z" />
        </svg>
      );
}

export const WiRain = (props: IconProps) => {
    return (
        <svg
          viewBox="0 0 30 30"
          fill="currentColor"
          {...props}
        >
          <path d="M4.64 16.91c0-1.15.36-2.17 1.08-3.07a4.82 4.82 0 012.73-1.73c.31-1.36 1.02-2.48 2.11-3.36s2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28 1.08.85 1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.65s1.37 1.03 1.81 1.78c.44.75.67 1.58.67 2.47 0 .88-.21 1.69-.63 2.44-.42.75-1 1.35-1.73 1.8-.73.45-1.53.69-2.4.71-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18.85-.04 1.58-.38 2.18-1.02s.9-1.39.9-2.26-.33-1.62-.98-2.26-1.42-.96-2.31-.96h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58a4.076 4.076 0 00-1.39-2.71c-.82-.73-1.76-1.09-2.85-1.09s-2.05.36-2.85 1.09a4.02 4.02 0 00-1.36 2.71l-.07.53c0 .12-.07.19-.2.19l-.53.03c-.83.1-1.53.46-2.1 1.07s-.85 1.33-.85 2.16c0 .87.3 1.62.9 2.26s1.33.98 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17-1.34-.06-2.47-.57-3.4-1.53s-1.37-2.1-1.37-3.43zm5.35 6.69c0-.04.01-.11.04-.2l1.63-5.77a.837.837 0 011.02-.56c.24.04.42.17.54.37.12.2.15.42.08.67l-1.63 5.73c-.12.43-.4.64-.82.64-.04 0-.07-.01-.11-.02-.06-.02-.09-.03-.1-.03a.831.831 0 01-.49-.33.895.895 0 01-.16-.5zm2.62 2.81l2.44-8.77c.04-.19.14-.34.3-.44.16-.1.32-.15.49-.15.09 0 .18.01.27.03.22.06.38.19.49.39.11.2.13.41.07.64l-2.43 8.78c-.04.17-.13.31-.29.43-.16.12-.32.18-.51.18-.09 0-.18-.02-.25-.05-.2-.05-.37-.18-.52-.39-.11-.18-.13-.39-.06-.65zm4.13-2.79c0-.04.01-.11.04-.23l1.63-5.77a.83.83 0 01.3-.44c.15-.1.3-.15.46-.15.08 0 .17.01.26.03.21.06.36.16.46.31.1.15.15.31.15.47 0 .03-.01.08-.02.14s-.02.1-.02.12l-1.63 5.73c-.04.19-.13.35-.28.46s-.32.17-.51.17l-.24-.05a.809.809 0 01-.46-.32.916.916 0 01-.14-.47z" />
        </svg>
      );
}