import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
expect.extend(matchers);
// This will add all the jest-dom matchers to vitest's expect
