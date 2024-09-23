// components/Sidebar.tsx
import { Box, Flex, Text, VStack, Avatar, Icon, Link } from '@chakra-ui/react';
import { FiMail, FiFileText, FiHome } from 'react-icons/fi';
import { AiFillProject } from 'react-icons/ai';
import { ReactElement } from 'react';
import { As } from '@chakra-ui/react';

interface NavItemProps {
  icon: ReactElement;
  label: string;
  href: string;
}

const NavItem = ({ icon, label, href }: NavItemProps) => {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue.400',
          color: 'white',
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon.type as As}
          />
        )}
        <Text fontWeight="medium">{label}</Text>
      </Flex>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <Box
      bg="gray.200"
      w={{ base: 'full', md: '20%' }}
      pos="fixed"
      h="full"
      borderRight="1px"
      borderColor="gray.300"
      overflowY="auto"
      p="4"
    >
      {/* User Profile Section */}
      <Flex align="center" mb="6">
        <Avatar
          size="md"
          name="Haseena Jameela"
          src="https://bit.ly/dan-abramov"
          mr="4"
        />
        <VStack align="flex-start">
          <Text fontSize="md" fontWeight="bold">
            Haseena Jameela
          </Text>
          <Text fontSize="sm" color="gray.500">
            haseenajameela@gmail.com
          </Text>
        </VStack>
      </Flex>

      {/* Navigation Links */}
      <VStack align="start" spacing="4">
        <Text fontSize="sm" fontWeight="bold" color="gray.600">
          MAIN
        </Text>
        <NavItem icon={<FiHome />} label="Dashboard" href="/" />
        <NavItem icon={<FiFileText />} label="Project History" href="/history" />
        <NavItem icon={<FiMail />} label="Emails" href="/emails" />

        <Text fontSize="sm" fontWeight="bold" color="gray.600" mt="6">
          WORKSPACES
        </Text>
        {/* These are placeholders for workspace names */}
        <NavItem icon={<AiFillProject />} label="Workspace 1" href="/workspace1" />
        <NavItem icon={<AiFillProject />} label="Workspace 2" href="/workspace2" />
        <NavItem icon={<AiFillProject />} label="Workspace 3" href="/workspace3" />

        <Text fontSize="sm" fontWeight="bold" color="gray.600" mt="6">
          LAUNCHPAD
        </Text>
        <NavItem icon={<AiFillProject />} label="Business Name 1" href="/business1" />
        <NavItem icon={<AiFillProject />} label="Business Name 2" href="/business2" />
        <NavItem icon={<AiFillProject />} label="Business Name 3" href="/business3" />
      </VStack>

      {/* Account Settings */}
      <VStack align="start" spacing="4" mt="6">
        <Text fontSize="sm" fontWeight="bold" color="gray.600">
          ACCOUNT SETTINGS
        </Text>
        <NavItem icon={<FiHome />} label="Profile" href="/profile" />
        <NavItem icon={<FiFileText />} label="Logout" href="/logout" />
      </VStack>
    </Box>
  );
};

export default Sidebar;
