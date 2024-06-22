import { isDevMode } from '@angular/core';
import { environment as dev_env } from './enviroment.dev';
import { environment as prod_env } from './enviroment.prod';

export const API_URL = isDevMode() ? dev_env.API_URL : prod_env.api_url;
