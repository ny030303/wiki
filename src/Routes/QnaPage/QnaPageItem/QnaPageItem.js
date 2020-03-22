import $ from "jquery"
import * as React from "react";

export default class QnaPageItem extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => $('#modal-close-default').addClass("uk-open"), 100);
  }

  render() {
    return (
      <div id="modal-close-default" className="uk-modal" style={{display: "block"}} uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.showQnaItemPopup}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h2 className="uk-modal-title">Default</h2>
          <ul className="uk-comment-list">
            <li>
              <article className="uk-comment uk-visible-toggle" tabIndex="-1">
                <header className="uk-comment-header uk-position-relative">
                  <div className="uk-grid-medium uk-flex-middle" style={{display: "flex"}}>
                    <div className="uk-width-auto">
                      <img className="uk-comment-avatar" src="/image/img_l.jpg" width="80" height="80" alt=""/>
                    </div>
                    <div className="uk-width-expand">
                      <h4 className="uk-comment-title uk-margin-remove uk-link-reset">Author</h4>
                      <p className="uk-comment-meta uk-margin-remove-top uk-link-reset">12 days ago</p>
                    </div>
                  </div>
                </header>
                <div className="uk-comment-body">
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
              </article>
              <ul>
                <li>
                  <article className="uk-comment uk-comment-primary uk-visible-toggle" tabIndex="-1">
                    <header className="uk-comment-header uk-position-relative">
                      <div className="uk-grid-medium uk-flex-middle" style={{display: "flex"}}>
                        <div className="uk-width-auto">
                          <img className="uk-comment-avatar" src="/image/img_l.jpg" width="80" height="80" alt=""/>
                        </div>
                        <div className="uk-width-expand">
                          <h4 className="uk-comment-title uk-margin-remove uk-link-reset">Author</h4>
                          <p className="uk-comment-meta uk-margin-remove-top uk-link-reset">12 days ago</p>
                        </div>
                      </div>
                    </header>
                    <div className="uk-comment-body">
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd
                        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                  </article>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  };

  show(title, message) {
    // console.log($('body'));
    $('body').append(`
      <div id="modal-close-default" class="uk-modal" style="display: block" uk-modal>
          
      </div>`
    );
    // $('#modal-close-default').modal();
  }
}