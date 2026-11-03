import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from './navigation-menu';

describe('NavigationMenu Component', () => {
  const renderMenu = (props = {}) =>
    render(
      <NavigationMenu data-testid="navigation" {...props}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent data-testid="dropdown">
              <NavigationMenuLink href="/web-design">Web Design</NavigationMenuLink>
              <NavigationMenuLink href="/seo">SEO</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

  test('renders with default props', () => {
    renderMenu();

    const navElement = screen.getByTestId('navigation');

    expect(navElement).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders with viewport by default', () => {
    renderMenu();

    const navElement = screen.getByTestId('navigation');
    expect(navElement).toHaveAttribute('data-viewport', 'true');
  });

  test('renders without viewport when disabled', () => {
    renderMenu({ viewport: false });

    const navElement = screen.getByTestId('navigation');
    expect(navElement).toHaveAttribute('data-viewport', 'false');
  });

  test('applies custom className', () => {
    renderMenu({ className: 'my-custom-nav' });

    const navElement = screen.getByTestId('navigation');
    expect(navElement).toHaveClass('my-custom-nav');
  });

  test('applies correct text direction', () => {
    renderMenu({ dir: 'ltr' });

    const navElement = screen.getByTestId('navigation');
    expect(navElement).toHaveAttribute('dir', 'ltr');
  });

  test('renders NavigationMenuLink with href', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/test">Test Link</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    const link = screen.getByText('Test Link');
    expect(link).toHaveAttribute('href', '/test');
  });

  test('renders NavigationMenuTrigger', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  test('renders NavigationMenuContent', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent data-testid="content">
              <NavigationMenuLink href="/item">Item</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  test('renders NavigationMenuViewport', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>Item</NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport data-testid="viewport" />
      </NavigationMenu>,
    );

    expect(screen.getByText('Item')).toBeInTheDocument();
  });

  test('renders NavigationMenuIndicator', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>Item</NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator data-testid="indicator" />
      </NavigationMenu>,
    );

    expect(screen.getByText('Item')).toBeInTheDocument();
  });

  test('renders NavigationMenuList', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList data-testid="list">
          <NavigationMenuItem>Item 1</NavigationMenuItem>
          <NavigationMenuItem>Item 2</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    expect(screen.getByTestId('list')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  test('renders NavigationMenuItem', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem data-testid="item">Menu Item</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    expect(screen.getByTestId('item')).toBeInTheDocument();
    expect(screen.getByText('Menu Item')).toBeInTheDocument();
  });
});
