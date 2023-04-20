import ClayButton from '@clayui/button';
import ClayModal, {useModal} from '@clayui/modal';
import Form from './form';
const spritemap = "icons.svg";
const ModalSheet = (props) => {
     console.log('Modal Sheet '+props.blogid +'  '+props.inheritvar);
    const { observer, onOpenChange, open } = useModal();
    return (
      <>
        {open && (
          <ClayModal
            observer={observer}
            size="lg"
            spritemap={spritemap}
            status="info"
          >
            <ClayModal.Header>Updates</ClayModal.Header>
            <ClayModal.Body>
              {(props.inheritvar==="BlogPosting")?
                <Form inheritvar="updateBlogPosting" blogid={props.blogid}></Form>:
                <Form inheritvar="updateKnowledgeBase" blogid={props.blogid}></Form>}

            </ClayModal.Body>
            <ClayModal.Footer
              last={
                <ClayButton.Group spaced>
                  <ClayButton
                    displayType="secondary"
                    onClick={() => onOpenChange(false)}
                  >
                    Cancel
                  </ClayButton>
                  <ClayButton onClick={() => onOpenChange(false)}>
                    Save changesEnter
                  </ClayButton>
                </ClayButton.Group>
              }
            />
          </ClayModal>
        )}
        <ClayButton onClick={() => onOpenChange(true)}>Update</ClayButton>
      </>
    );
  };

export default ModalSheet;