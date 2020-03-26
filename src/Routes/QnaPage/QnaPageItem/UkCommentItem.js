import * as React from 'react';

export default class UkCommentItem extends React.Component {

  render() {
    const {name, created, contents, classNames} = this.props;
    return (
      <article className={`uk-comment uk-visible-toggle ${(classNames)? classNames : ""}`}  tabIndex="-1">
        <header className="uk-comment-header uk-position-relative">
          <div className="uk-grid-medium uk-flex-middle" style={{display: "flex"}}>
            <div className="uk-width-auto">
              <img className="uk-comment-avatar" src="/image/img_l.jpg" width="80" height="80" alt=""/>
            </div>
            <div className="uk-width-expand">
              <h4 className="uk-comment-title uk-margin-remove uk-link-reset">{name}</h4>
              <p className="uk-comment-meta uk-margin-remove-top uk-link-reset">{created}</p>
            </div>
          </div>
        </header>
        <div className="uk-comment-body">
          <p>{contents}</p>
        </div>
      </article>
    );
  };
};