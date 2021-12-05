import {Avatar, Box, HStack, Link, Text, Wrap, WrapItem} from '@chakra-ui/react';

import styles from '../../styles/ReplyCard.module.scss';
import {getTime} from '../../utils/getTime';
import {svgIcon} from '../../utils/svgIcon';

/** Reply item component */
const ReplyCard = ({ item, setAddressee }) => (
  <Box className={styles.reply} px={5} pb={6}>
    {/* Avatar block */}
    <Box>
      <Wrap pr={3}>
        <WrapItem>
          <Avatar size="sm" name="avatar" src={item.user.avatar} />
        </WrapItem>
      </Wrap>
    </Box>
    {/* /Avatar block */}

    {/* Content block */}
    <Box>
      <Link
        as="h3"
        fontSize="15px"
        pb={2}
        color="white"
        onClick={() => setAddressee(`@${item.user.firstName}${item.user.lastName}`)}
      >{item.reply.title}</Link>

      <Box
        color="white"
        fontSize="15px"
        fontFamily="Lato"
        fontWeight={400}
        dangerouslySetInnerHTML={{ __html: item.reply.content }}
        mb={3}
      />

      {/* Extra info block */}
      <Box>
        <Text
          as="span"
          color="white"
          fontSize="12px"
          opacity={0.5}
          fontWeight={600}
          p={0}
          mr={4}
        >Reply</Text>
        <Text
          as="span"
          color="white"
          fontSize="12px"
          opacity={0.5}
          fontWeight={400}
          className={styles.time}
          p={0}
          mr={4}
        >{getTime(item.reply.lastUpdate)}hr</Text>
        <Text
          as="span"
          color="rgba(95, 116, 149, 0.5)"
          fontSize="30px"
          opacity={0.5}
          fontWeight={400}
          lineHeight="16px"
          display="inline-block"
          transform="translateY(-3px)"
          p={0}
          className="dots"
        >... </Text>
      </Box>
      {/* /Extra info block */}

      {/* Replies info block */}
      {item.replies.length ? (
        <Box className={styles.hasReplies} mt={2}>
          <Box>
            {svgIcon('replyArrow', 'white', 24, 24, 0.3)}
          </Box>
          <HStack spacing='4px' mx={3}>
            <Avatar size='xs' name='avatar' src={item.replies[0].user.avatar} />
            {item.replies[1] && <Avatar size='xs' name='avatar' src={item.replies[1].user.avatar} />}
          </HStack>
          <Link
            color="white"
            fontSize="12px"
            opacity={0.5}
            fontWeight={400}
            p={0}
            mr={4}
          >{item.replies.length} replies</Link>
        </Box>
      ) : null}
      {/* /Replies info block */}
    </Box>
    {/* Content block */}
  </Box>
);

export default ReplyCard;
