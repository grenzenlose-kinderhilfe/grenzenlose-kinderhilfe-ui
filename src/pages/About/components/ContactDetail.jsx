import { Flex, Link, Tag } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillBank } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdDocument } from "react-icons/io";
import { MdEmail, MdLocationPin } from "react-icons/md";

const ContactDetail = ({
  title,
  subtitle,
  phone,
  email,
  address,
  bank,
  bankAccountNumber,
  documents,
}) => {
  const { t } = useTranslation();

  const localization = {
    link: t("pages.aboutUs.link", "Link"),
  };

  return (
    <Flex
      gap={1}
      flexDirection="column"
      border="1px solid #112B5C"
      borderRadius="10px"
      padding="10px"
      margin="10px"
    >
      {title && (
        <Flex gap={1} alignItems="center">
          <Flex fontWeight="700">{title}</Flex>
          {subtitle && <Flex>- {subtitle}</Flex>}
        </Flex>
      )}
      {phone && (
        <Flex gap={1} alignItems="center">
          <BsTelephoneFill />
          <Link href={`tel:+${phone}`}>+ {phone}</Link>
        </Flex>
      )}
      {address && (
        <Flex gap={1} alignItems="center">
          <MdLocationPin />
          {address}
        </Flex>
      )}
      {email && (
        <Flex gap={1} alignItems="center">
          <MdEmail />
          <Link href={`mailto:${email}`}>{email}</Link>
        </Flex>
      )}
      {bank && (
        <Flex gap={1} alignItems="center">
          <AiFillBank />
          {bank}: {bankAccountNumber}
        </Flex>
      )}
      {documents && (
        <Flex>
          {documents.map(({ name, links }, idx) => (
            <Flex key={`document-${name}-${idx}`} gap={1} alignItems="center">
              <IoMdDocument />
              {name}:
              {links.map((link, idx) => (
                <Flex key={`tag-${name}-${idx}`} gap={1}>
                  <Tag color="black">
                    <Link href={link}>{localization.link}</Link>
                  </Tag>
                </Flex>
              ))}
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default ContactDetail;
