import { render } from '@testing-library/svelte';
import Hello from './Hello.svelte';
import { describe, expect, it } from 'vitest';

describe('Hello.svelte', () => {
	it('renders Hello, Svelte', () => {
		render(Hello, { name: 'Svelte' });
		expect(document.querySelector('h1').textContent).toBe('Hello, Svelte');
	});
});
