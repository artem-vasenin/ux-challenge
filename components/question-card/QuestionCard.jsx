import {useEffect, useState} from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  Menu,
  MenuButton, MenuItem, MenuList,
  Tag,
  TagLabel,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import {ChevronDownIcon} from '@chakra-ui/icons'

import styles from '../../styles/QuestionCard.module.scss';
import ReplyCard from '../reply-card/ReplyCard';
import {getTime} from '../../utils/getTime';
import Form from '../form/Form';

/** Question card wrapper */
const QuestionCard = ({item, submit}) => {
  /** full text or short description */
  const [fullContent, setFullContent] = useState(false);
  const [addressee, setAddressee] = useState('');

  return (
    <Box bg='#272B35' mb={4} borderRadius={12} pt={3}>
      <Box bg='#272B35' color="white" px="32px" py="16px">
        {/* Question card content */}
        <Text as="h2" fontSize="21px" pb={2}>
          {item.question.title}
        </Text>

        <Box
          isTruncated={!fullContent}
          noOfLines={fullContent ? false : 1}
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: item.question.content }}
          mb={3}
        />

        <Box mb={5}>
          <Link
            onClick={() => setFullContent(!fullContent)}
            fontSize="12px"
            opacity={0.5}
          >
            {fullContent ? "see less" : "see more"}
          </Link>
        </Box>
        {/* /Question card content */}

        {/* Question extra info */}
        <Box className={styles.questionInfo}>
          <Box pr={4}>
            <Tag
              size="md"
              borderRadius="full"
              variant="solid"
              className={styles.tag}
            >
              <TagLabel>Funding</TagLabel>
            </Tag>
          </Box>
          <Box className={styles.questionInfo__user} px={4}>
            <Wrap pr={4}>
              <WrapItem>
                <Avatar size="sm" name="avatar" src={item.user.avatar} />
              </WrapItem>
            </Wrap>
            <Box>
              <Text as="span" fontSize="15px" pb={2}>
                {item.user.firstName} {item.user.lastName}
              </Text>
            </Box>
          </Box>
          <Box className={styles.questionInfo__time} ml={4}>
            <Text as="span" fontSize="12px" opacity={0.5} fontWeight={400} p={0} mr={4}>
              {getTime(item.question.lastUpdate)}h ago
            </Text>
            <Text
              as="span"
              fontSize="30px"
              opacity={0.5}
              fontWeight={400}
              lineHeight="16px"
              p={0}
              className="dots"
            >...</Text>
          </Box>
        </Box>
        {/* /Question extra info */}
      </Box>

      {/* Question replies block */}
      {Array.isArray(item.replies) && item.replies.length ? (
        <>
          <Box className={styles.repliesBlock} pt={5}>
            <Box className={styles.repliesActions} px={5} mb={6}>
              <Menu id="navbar" isLazy>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  transition="all 0.2s"
                  borderRadius="100px"
                  fontSize="12px"
                  color="white"
                  bg="rgba(95, 116, 149, 0.2)"
                  _hover={{ bg: "rgba(95, 116, 149, 0.6)", color: "white" }}
                  _expanded={{ bg: "rgba(95, 116, 149, 0.4)"}}
                >
                  Most Recent
                </MenuButton>
                <MenuList fontSize="12px">
                  <MenuItem>Menu item 1</MenuItem>
                  <MenuItem>Menu item 2</MenuItem>
                  <MenuItem>Menu item 3</MenuItem>
                </MenuList>
              </Menu>

              <Link fontSize="12px" color="white">Permalink</Link>
            </Box>

            <Box className={styles.repliesList}>
              {item.replies.map((r) => <ReplyCard key={r.id} item={r} setAddressee={setAddressee}/>)}
            </Box>
          </Box>

          <Divider orientation="horizontal" borderBottom="1px solid #343C4B" />
        </>
      ) : null}
      {/* /Question replies block */}

      {/* Question form */}
      <Box className={styles.formBlock} borderBottomRadius={12}>
        <Form item={item} submit={submit} addressee={addressee} setAddressee={setAddressee} />
      </Box>
      {/* /Question form */}
    </Box>
  );
};

export default QuestionCard;
