const BASE_URL: string = import.meta.env.VITE_BASE_URL as string;
const IMAGE_PATH: string = import.meta.env.VITE_IMAGE_PATH as string;

const APP_ENV = {
    BASE_URL: BASE_URL,
    IMAGE_PATH: IMAGE_PATH,
};

export { APP_ENV };
