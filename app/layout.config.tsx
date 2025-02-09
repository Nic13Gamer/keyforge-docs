import Logo from '@/components/logo';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { SquareArrowOutUpRight } from 'lucide-react';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <Logo />,
  },
  githubUrl: 'https://github.com/Nic13Gamer/keyforge-node',
  links: [
    {
      text: 'Keyforge',
      url: 'https://keyforge.dev',
      external: true,
      icon: <SquareArrowOutUpRight />,
    },
  ],
};
