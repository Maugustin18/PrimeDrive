import {HeaderRowOne} from './RelativeHeaderBlocks/HeaderRowOne.js';
import {HeaderRowTwo} from './RelativeHeaderBlocks/HeaderRowTwo.js';

const RelativeHeaderContent = `
    <div class="header_container">
        <div class="content_block header_content_wrapper">
            <div class="header_content_block">
                ${HeaderRowOne}
                ${HeaderRowTwo}
            </div>
        </div>
    </div>
`;

export const RelativeHeader = RelativeHeaderContent;