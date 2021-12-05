import {useEffect, useState} from "react";
import {Box, Input, InputGroup, InputRightAddon, Stack} from "@chakra-ui/react";

import styles from "../../styles/Form.module.scss";
import {svgIcon} from "../../utils/svgIcon";

/** Form for new reply */
const Form = ({ item, submit, addressee, setAddressee }) => {
  /** Form state */
  const [reply, setReply] = useState(addressee);

  /** Adding a new comment to the database and clearing the form */
  const handleSubmit = () => {
    submit(item, reply);
    setReply('');
    setAddressee('');
  }

  useEffect(() => {
    setReply(addressee);
  }, [addressee]);

  return (
    <Box p={5}>
      <Stack spacing={4}>
        <InputGroup>
          <Input
            type='text'
            variant="unstyled"
            placeholder='How can you help with this Request?'
            bg="#374050"
            color="white"
            borderRadius="100px"
            fontSize="16px"
            fontFamily="Lato"
            fontWeight={400}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            pl={5}
          />
          <InputRightAddon
            bg="#374050"
            onClick={handleSubmit}
            borderRadius="100px"
            className={styles.button}
            borderColor="transparent"
          >
            {svgIcon('replyBack', '#5F7495', 24, 24, 0.5)}
          </InputRightAddon>
        </InputGroup>
      </Stack>
    </Box>
  );
};

export default Form;
